// variables

// add moment date for Date div

// agenda section to be filled with daily tasks for that day

// completed items allows user to write in notes of completed work

// resources section filled with helpful links or useful search APIs

// APIs for Curiosity Corner
//random word generator
function randomWord() {
    
    fetch('https://xkubist-random-word-v1.p.rapidapi.com/run.cgi')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}

function marsWeather() {

    fetch('https://api.nasa.gov/insight_weather/?api_key=faCfjgrFrO81fgt3XAlsJyNqFWKWll17NRAUNcDA&feedtype=json&ver=1.0')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}
