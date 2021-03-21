const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let maxLevel = 5;
let branches = 2;
let sides = 5;
let gapBetweenTwoBranches = Math.random() * 150 + 150;
let lengthOfTheBranches = Math.random() * 150 + 150;
let spread = Math.random();
let angle = Math.PI * 2 * spread;

ctx.translate(canvas.width / 2, canvas.height / 2);

function drawLine(level) {
    if (level > maxLevel) {
        return;
    }
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(lengthOfTheBranches, 0);
    ctx.stroke();
    for (let i = 1; i < branches + 1; i++) {
        ctx.save();
        ctx.translate((gapBetweenTwoBranches * i), 0);
        ctx.scale(0.5, 0.5);
        ctx.save();

        ctx.rotate(angle);
        drawLine(level + 1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawLine(level + 1);
        ctx.restore();

        ctx.restore();
    }
}

for (let i = 0; i < sides; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
}

window.addEventListener("click", () => {
    maxLevel = 5;
    branches = 2;
    sides = 5;
    gapBetweenTwoBranches = Math.random() * 150 + 150;
    lengthOfTheBranches = Math.random() * 150 + 150;
    spread = Math.random();
    angle = Math.PI * 2 * spread;
    ctx.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
    );
    for (let i = 0; i < sides; i++) {
        drawLine(0);
        ctx.rotate((Math.PI * 2) / sides);
    }
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
});
