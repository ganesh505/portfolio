const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = document.querySelector(".live-demo").offsetHeight;

const particlesArray = [];
const numberOfParticles = 80;

class Particle { /* ... */ }
function initParticles() { /* ... */ }
function animateParticles() { /* ... */ }

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".live-demo").offsetHeight;
});

function runCode() {
    const code = document.getElementById("editor").value;
    const output = document.getElementById("output");
    try {
        const consoleLog = console.log;
        let result = '';
        console.log = (msg) => result += msg + '\n';
        eval(code);
        console.log = consoleLog;
        output.textContent = result || 'No output';
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
}