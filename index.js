var wordBtn = document.getElementById("random-word-button");
var randomWord = document.getElementById("random-word");
var marsBtn = document.getElementById("mars-weather-button");

wordBtn.addEventListener("click", function () {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3561faa0a4msh79219792fe4522ap13fbb8jsn0b78e7370034",
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    },
  };

  fetch(
    "https://random-words5.p.rapidapi.com/getMultipleRandom?count=5",
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      randomWord.textContent = data[0].randomWord.value;
    });
});
