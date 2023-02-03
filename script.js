const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6fa00fe221msha9d1ef9958c7eb2p109bb0jsn26e171667af0",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      matlab.innerHTML = response.word;
      defination.innerHTML = response.definition
        .replaceAll("1.", "<br>1 :->) ")
        .replaceAll("2.", "<br>2 :->) ")
        .replaceAll("3.", "<br>3 :->) ")
        .replaceAll("4.", "<br>4 :->) ");
    })
    .catch((err) => console.error(err));
};

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value);
});
