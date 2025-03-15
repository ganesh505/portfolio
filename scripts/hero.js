// Dynamic Greeting
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
    document.getElementById("greeting").textContent = `${greeting}, I'm a Software Developer`;
}
setGreeting();

// Dark/Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light");
    const toggle = document.querySelector(".toggle");
    toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}
if (localStorage.getItem("theme") === "light") toggleTheme();

// Particle Effect
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    }
    draw() {
        ctx.fillStyle = document.body.classList.contains("light") ? "rgba(204, 0, 0, 0.8)" : "rgba(204, 0, 0, 0.8)"; // Consistent red particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});