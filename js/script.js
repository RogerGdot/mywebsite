// script.js

const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;

// Zufällige Geschwindigkeit und Richtung für den Ball
let dx = (Math.random() - 0.5) * 25; // Zufällige Geschwindigkeit zwischen -2 und 2
let dy = (Math.random() - 0.5) * 25; // Zufällige Geschwindigkeit zwischen -2 und 2

const radius = 20;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function update() {
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx; // Umkehren der x-Richtung bei Kollision mit linker/rechter Wand
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy; // Umkehren der y-Richtung bei Kollision mit oberer/unterer Wand
    }
    x += dx;
    y += dy;
}

function animate() {
    drawCircle();
    update();
    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2; // Ball in die Mitte des Canvas verschieben
    y = canvas.height / 2;
    // Zufällige Geschwindigkeit und Richtung bei der Größenänderung des Fensters
    dx = (Math.random() - 0.5) * 4;
    dy = (Math.random() - 0.5) * 4;
});
