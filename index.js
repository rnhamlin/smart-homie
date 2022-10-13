// Variables
var goal = document.querySelector("#goal")
var assignment = document.querySelector("#assignment-name")
var subject = document.querySelector("#subject")
var grade = document.querySelector("#grade")
var standard = document.querySelector("#standard")

var wordBtn = document.querySelector("random-word-button")
var marsBtn = document.querySelector("mars-weather-button")


//Capture input for assignments to fill in "You're Working On"

//send assignment info to database

//Add event listener to button for completed assignment



//finish APIs for the CC
//APIs for Curiosity Corner

//wordBtn.addEventListener('click', function () {
  //  fetch("https://xkubist-random-word-v1.p.rapidapi.com/run.cgi")
    //    .then((res) => res.json())
      //  .then((data) => {
        //    console.log(data)
        //})
//})



marsBtn.addEventListener('click', function () {
    fetch('https://api.nasa.gov/insight_weather/?api_key=faCfjgrFrO81fgt3XAlsJyNqFWKWll17NRAUNcDA&feedtype=json&ver=1.0')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
})
