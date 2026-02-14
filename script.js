let tapCount = 0;

document.body.addEventListener("click", () => {
    tapCount++;

    if (tapCount === 5) {
        document.getElementById("secret").style.display = "block";
        launchConfetti();
    }
});

/* little celebration effect */
function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = "20px";
        heart.style.animation = "fall 3s linear forwards";
        document.body.appendChild(heart);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
