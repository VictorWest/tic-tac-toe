let cell = document.querySelectorAll(".cell")
let fighterX = document.querySelector(".fighter-X")
let fighterO = document.querySelector(".fighter-O")
let header = document.querySelector(".header")
let container = document.querySelector(".container")
let undo = document.querySelector(".undo")
let switchPlayers = document.querySelector(".switch")
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
        element.textContent = playerOne
        clicked = element.classList[1]
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
