const wr = document.getElementById("wr-text")


//loop:
// -> write
// -> wait
// -> delete

const charDisplayTime = 0.1
const waitTime = 1.5
const words = 
[
    "Frontend",
    "Backend", 
    "Full Stack", 
    "Youtuber", 
    "Game Developer", 
    "Blogger"
]


let intervalId = null
let wordIndex = 0
let charIndex = 0

function Start()
{
    intervalId = setInterval(Write, charDisplayTime * 1000)
}

function Write()
{
    if(!wr.classList.contains("writing"))
        wr.classList.add("writing")

    wr.textContent = words[wordIndex].substring(0, charIndex)
    
    if(charIndex < words[wordIndex].length)
    {
        charIndex++
        return
    }

    clearInterval(intervalId)
    Wait(waitTime)
}

function Wait(seconds)
{
    wr.classList.remove("writing")

    setTimeout(() => 
    {
        intervalId = setInterval(Delete, charDisplayTime * 1000)
    }, seconds * 1000)
}

function Delete()
{
    if(!wr.classList.contains("writing"))
        wr.classList.add("writing")

    wr.textContent = words[wordIndex].substring(0, charIndex)

    if(charIndex > 0)
    {
        charIndex--
        return
    }
    
    clearInterval(intervalId)
    wordIndex++
    wordIndex %= words.length
    Start()
}

Start()