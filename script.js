const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const pontos = document.querySelector(".pontos");
let alreadyjump = false;
let count = 0;


document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        (jump());
    }
})

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump")
        alreadyjump = true;

        setTimeout(() => {
            dino.classList.remove("jump");
            alreadyjump = false;
        }, 1100)
    }
}

setInterval(() => {
    let dinoBottom = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    let cactoLeft = parseInt(
        window.getComputedStyle(cacto).getPropertyValue("left")
    );
    if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyjump) {
        alert(`Game Over! Seu Score foi: ${count}`);
        count = 0;
    }
    count++;
    pontos.innerHTML = `SCORE: ${count}`;
}, 10);