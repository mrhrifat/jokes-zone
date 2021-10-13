const url = "https://icanhazdadjoke.com/slack"
fetch(url)
    .then(res => res.json())
    .then(joke => {
        const output = document.getElementById('paragraph')
        const getJoke = joke.attachments[0].text
        output.innerText = getJoke
    })