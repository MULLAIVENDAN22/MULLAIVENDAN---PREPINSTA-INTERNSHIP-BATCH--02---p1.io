

let containers = document.getElementById("container")
let scoredisplay = document.getElementById("score")
let timedisplay = document.getElementById("time")

let score = 0;
let time = 30;

const fruits = ['🍒', '🍇', '🍈', '🍉', '🍏', '🍎', '🍓', '🍐']
let fruit = [...fruits, ...fruits]
let fruity = []

timer()

fruit.forEach((fruit, index) => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.dataset.index = index
    containers.appendChild(card)
    let element = document.createElement("span")
    element.innerText = fruit
    card.appendChild(element)
    showcard(card, element)
    hidecard(element)
})

let data = [], matches = 0

function showcard(card, element) {
    card.addEventListener("click", () => {
        element.classList.remove("hided")
        element.classList.add("opened")
        card.classList.remove("hided")
        card.classList.add("opened")

        let clickedFruit = element;
        if (fruity.length === 2) {
            return
        }
        fruity.push(clickedFruit)

        if (fruity.length === 2) {
            const [first, second] = fruity
            setTimeout(() => {
                if (first.textContent === second.textContent) {
                    updateScore()
                    matches++
                    first.classList.add("matched")
                    second.classList.add("matched")
                    first.closest(".card").classList.add("matched") // add matched class to parent div
                    second.closest(".card").classList.add("matched")
                    first.classList.remove("hided")
                    second.classList.remove("hided")
                    fruity = []

                } else {
                    first.classList.add("hided")
                    second.classList.add("hided")
                }
            }, 200);
        }

    })
}

function hidecard(element) {
    element.classList.add("hided")
}

function updateScore() {
    score += 10
    scoredisplay.innerText = `score : ${score}`
    setInterval(() => {
        if (score===80){
            alert("Congratulations, you won!")
        } 
    },150);
    clearInterval();
}

function timer() {
    timerInterval = setInterval(() => {
        time--; // decrement time by 1 second
        timedisplay.innerText = `Time: ${time} seconds`; // update the display
        if (time <= 0) {
            clearInterval(timerInterval); // stop the timer when time reaches 0
            alert("try text time")
        }
    }, 1000);
}

