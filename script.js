/* Typing Intro */
const text = "Hey Eekshitha... I wrote something instead of saying it.";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();

/* Scene Auto Play */
const scenes = document.querySelectorAll(".scene");
let current = 0;

setInterval(() => {
    scenes[current].classList.remove("active");
    current = (current + 1) % scenes.length;
    scenes[current].classList.add("active");
}, 3500);

/* -------- Easter Egg Logic -------- */

/* Method 1: Type H + E */
let secret = "";
document.addEventListener("keydown", (e) => {
    secret += e.key.toUpperCase();

    if (secret.includes("HE")) {
        unlockMemory();
    }
});

/* Method 2: Click Helium 5 times */
let clicks = 0;
document.getElementById("helium").addEventListener("click", () => {
    clicks++;
    if (clicks === 5) unlockMemory();
});

function unlockMemory() {
    document.getElementById("easterEgg").style.display = "block";
}
