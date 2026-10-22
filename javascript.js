
function play() {
    document.querySelector("button").style.display="none";
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    const particles = [];
    for(let i = 0; i < 400; i++){
        particles.push({
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height,
            radius:Math.random() * 3.5 + 1,
            speed:Math.random() * 1.5 + 0.5,
            opacity:Math.random() * 0.6 + 0.4,
            density: Math.random() * 10
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.fill();

            p.y += p.speed;
            p.density += 0.01; 
            p.x += Math.sin(p.density) * 0.5;
            if (p.y > canvas.height || p.x > canvas.width || p.x < 0) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
                p.speed = Math.random() * 1.5 + 0.5;
            }
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', setCanvasSize);
}

