const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.getElementById("year").textContent = new Date().getFullYear();

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

reveals.forEach((el) => revealObserver.observe(el));

const progress = document.querySelector(".scroll-progress");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateScrollState() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${Math.min(100, (scrollTop / maxScroll) * 100)}%`;

  const activeSection = sections
    .filter((section) => section.offsetTop - 180 <= scrollTop)
    .pop();

  navLinks.forEach((link) => {
    link.classList.toggle("active", activeSection && link.getAttribute("href") === `#${activeSection.id}`);
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const phrases = [
  "from Jetson to the cloud.",
  "for cars, cameras, and data platforms.",
  "with CV, MLOps, and real systems.",
  "that survives production traffic."
];
const role = document.querySelector(".dynamic-role");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!role || prefersReducedMotion) return;

  const phrase = phrases[phraseIndex];
  role.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
    window.setTimeout(typeRole, 48);
    return;
  }

  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    window.setTimeout(typeRole, 1400);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(typeRole, 26);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  window.setTimeout(typeRole, 260);
}

if (role && !prefersReducedMotion) {
  role.textContent = "";
  typeRole();
}

const commands = [
  "deploy --target=edge",
  "optimize --latency real-time",
  "scale --pipeline petabytes",
  "ship --mlops production"
];
const typedCommand = document.querySelector(".typed-command");
let commandIndex = 0;
let commandChar = 0;
let commandDeleting = false;

function typeCommand() {
  if (!typedCommand || prefersReducedMotion) return;

  const command = commands[commandIndex];
  typedCommand.textContent = command.slice(0, commandChar);

  if (!commandDeleting && commandChar < command.length) {
    commandChar += 1;
    window.setTimeout(typeCommand, 42);
    return;
  }

  if (!commandDeleting) {
    commandDeleting = true;
    window.setTimeout(typeCommand, 1100);
    return;
  }

  if (commandChar > 0) {
    commandChar -= 1;
    window.setTimeout(typeCommand, 22);
    return;
  }

  commandDeleting = false;
  commandIndex = (commandIndex + 1) % commands.length;
  window.setTimeout(typeCommand, 220);
}

typeCommand();

const counters = document.querySelectorAll(".count-up");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const target = Number(entry.target.dataset.target || 0);
      const duration = 900;
      const startedAt = performance.now();

      function tick(now) {
        const progressAmount = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progressAmount, 3);
        entry.target.textContent = `${Math.round(target * eased)}+`;

        if (progressAmount < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const cursorOrb = document.querySelector(".cursor-orb");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let orbX = mouseX;
let orbY = mouseY;

if (!prefersReducedMotion && cursorOrb && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-pointer");

  window.addEventListener(
    "pointermove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    },
    { passive: true }
  );

  function moveOrb() {
    orbX += (mouseX - orbX) * 0.14;
    orbY += (mouseY - orbY) * 0.14;
    cursorOrb.style.transform = `translate3d(${orbX - cursorOrb.offsetWidth / 2}px, ${orbY - cursorOrb.offsetHeight / 2}px, 0)`;
    requestAnimationFrame(moveOrb);
  }

  moveOrb();
}

const tiltCards = document.querySelectorAll(".tilt-card");
tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const magneticItems = document.querySelectorAll(".magnetic");
magneticItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.28;
    item.style.transform = `translate(${x}px, ${y}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});

function bootNeuralCanvas() {
  const canvas = document.getElementById("neural-canvas");
  if (!canvas || prefersReducedMotion) return;

  const context = canvas.getContext("2d");
  const particles = [];
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const particleCount = Math.min(90, Math.floor(window.innerWidth / 18));

  function resize() {
    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function seed() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        size: Math.random() * 1.8 + 0.8
      });
    }
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particles.forEach((particle) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 170) {
        particle.vx -= dx * 0.000012;
        particle.vy -= dy * 0.000012;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(61, 214, 208, 0.42)";
      context.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance < 130) {
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(155, 123, 255, ${0.18 * (1 - distance / 130)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    seed();
  });

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    },
    { passive: true }
  );

  resize();
  seed();
  draw();
}

bootNeuralCanvas();
