// API URL
const url = "https://icanhazdadjoke.com/slack"

// Promise 
fetch(url)
    .then(res => res.json())
    .then(joke => {

        // Output 
        const output = document.getElementById('paragraph')

        // Access Jokes
        const getJoke = joke.attachments[0].text

        // Show Jokes
        output.innerText = getJoke
    })