const text = "Her saniye ağlımdasan..."; // sonradan dəyişərik
const text1 = "Sevilirsiniz..."; // sonradan dəyişərik
let index = 0;
const speed = 100;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

let index1 = 0;
function typeWriter1() {
  if (index1 < text1.length) {
    document.getElementById("typewriter1").innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeWriter1, speed);
  }
}
window.onload = () => {
  typeWriter();
  typeWriter1();
  printConsole();
};

// window.onload = typeWriter1;

// Scroll ilə kod bloklarını göstər
function revealOnScroll() {
    const blocks = document.querySelectorAll('.code-block');
    const triggerBottom = window.innerHeight * 0.85;
  
    blocks.forEach(block => {
      const blockTop = block.getBoundingClientRect().top;
  
      if (blockTop < triggerBottom) {
        block.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  function showReply(text) {
    const reply = document.getElementById('user-reply');
    reply.innerText = `"${text}"`;
  }
  function revealMemories() {
    const items = document.querySelectorAll('.memory-list li');
    const triggerBottom = window.innerHeight * 0.85;
  
    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
  
      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', () => {
    revealOnScroll();
    revealMemories();
  });

  const consoleLines = [
  "console.log('Hələ də onun səsini axtarıram...');",
  "console.log('Yaddaşımdan silinmədi...');",
  "console.log('Qəlb hələ də gözləyir...');"
];

let consoleIndex = 0;
function printConsole() {
  if (consoleIndex < consoleLines.length) {
    document.getElementById("console-text").innerHTML += consoleLines[consoleIndex] + "<br/>";
    consoleIndex++;
    setTimeout(printConsole, 1500);
  }
}
window.onload = () => {
  typeWriter();
  printConsole();
};
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    velocity: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 102, 204, 0.8)";

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    s.y += s.velocity;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}
animateStars();

      const avocado = document.querySelector('.avocado-body');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const explosion = document.querySelector('.explosion');

let opened = false;

avocado.addEventListener('click', () => {
  if (!opened) {
    left.style.transform = 'translateX(-120px) rotate(-15deg)';
    right.style.transform = 'translateX(120px) rotate(15deg)';
    explosion.style.opacity = '1';

    // Particle animation (can be canvas based)
    launchParticles();
    opened = true;
  }
});

function launchParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;

  const particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: 100,
      y: 100,
      dx: Math.random() * 4 - 2,
      dy: Math.random() * 4 - 2,
      r: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, 200, 200);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = '#ff66cc';
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.r *= 0.96;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

  function toggleImage(element) {
    element.classList.toggle('toggled')
  }

  
