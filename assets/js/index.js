// variables

// add moment date for Date div

// agenda section to be filled with daily tasks for that day

// completed items allows user to write in notes of completed work

// resources section filled with helpful links or useful search APIs

// APIs for Curiosity Corner
//random word generator
function randomWord() {
    
    fetch('https://xkubist-random-word-v1.p.rapidapi.com/run.cgi')
        .then(response => response.json())
        .then(response => console.log(data))
}


