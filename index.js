// Variables
var goal = document.querySelector("#goal")
var assignment = document.querySelector("#assignment-name")
var subject = document.querySelector("#subject")
var grade = document.querySelector("#grade")
var standard = document.querySelector("#standard")

var wordBtn = document.getElementById("random-word-button")
var randomWord = document.getElementById("random-word")
var marsBtn = document.getElementById("mars-weather-button")


//Capture input for assignments to fill in "You're Working On"

//send assignment info to database

//Add event listener to button for completed assignment



//finish APIs for the CC
//APIs for Curiosity Corner

wordBtn.addEventListener('click', function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3561faa0a4msh79219792fe4522ap13fbb8jsn0b78e7370034',
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
    };

    fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5', options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            randomWord.textContent = data[0].randomWord.value
        })


})

