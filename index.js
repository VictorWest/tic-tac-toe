let body = document.querySelector("body")
let cell = document.querySelectorAll(".cell")
let fighterX = document.querySelector(".fighter-X")
let fighterO = document.querySelector(".fighter-O")
let header = document.querySelector(".header")
let container = document.querySelector(".container")
let undo = document.querySelector(".undo")
let restart = document.querySelector(".restart")
let switchPlayers = document.querySelector(".switch")
let darkTheme = document.querySelector(".dark")
let lightTheme = document.querySelector(".light")
let playerOne = ""

fighterX.addEventListener("click", () => {
    playerOne = "X"
    header.style.display = "none"
    container.style.display = "flex"
})

fighterO.addEventListener("click", () => {
    playerOne = "O"
    header.style.display = "none"
    container.style.display = "flex"
})
let clicked
cell.forEach((element) => {
    element.addEventListener(("click"), () => {
        if(element.textContent == ".."){
            element.textContent = playerOne
            clicked = element.classList[1]
        }
    })
})

switchPlayers.addEventListener("click", () => {
    if(playerOne === "X"){
        playerOne = "O"
    }else{
        playerOne = "X"
    }
})

undo.addEventListener("click", () => {
    document.querySelector(`.${clicked}`).textContent = ".."
})

restart.addEventListener("click", () => {
    location.reload()
})

darkTheme.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
})

lightTheme.addEventListener("click", () => {
    body.style.backgroundColor = "#008080"
    lightTheme.style.display = "none"
    darkTheme.style.display = "block"
})
