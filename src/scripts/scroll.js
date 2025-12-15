const isMobile = window.matchMedia("(max-width: 768px)").matches;
if (!isMobile) {
  window.addEventListener("wheel", (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (isScrolling) return;

    if (event.key === "ArrowDown") {
      scrollToSection(currentIndex + 1);
    }

    if (event.key === "ArrowUp") {
      scrollToSection(currentIndex - 1);
    }
  });
}

/* ===============================
   Utilidades de color
=============================== */

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(from, to, t) {
  return [
    Math.round(lerp(from[0], to[0], t)),
    Math.round(lerp(from[1], to[1], t)),
    Math.round(lerp(from[2], to[2], t))
  ];
}

function getAccent(section) {
  return getComputedStyle(section)
    .getPropertyValue("--accent")
    .trim()
    .split(",")
    .map(Number);
}

/* ===============================
   Variables base
=============================== */

const container = document.getElementById("scroll-container");
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll("[data-index]");

let currentIndex = 0;
let isScrolling = false;

/* ===============================
   Scroll programático
=============================== */

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;

  isScrolling = true;
  currentIndex = index;

  sections[currentIndex].scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

/* ===============================
   Input: mouse y teclado
=============================== */

window.addEventListener("wheel", (event) => {
  if (isScrolling) return;

  if (event.deltaY > 0) {
    scrollToSection(currentIndex + 1);
  } else {
    scrollToSection(currentIndex - 1);
  }
});

window.addEventListener("keydown", (event) => {
  if (isScrolling) return;

  if (event.key === "ArrowDown") {
    scrollToSection(currentIndex + 1);
  }

  if (event.key === "ArrowUp") {
    scrollToSection(currentIndex - 1);
  }
});

/* ===============================
   Header navigation
=============================== */

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    scrollToSection(index);
  });
});

/* ===============================
   Color interpolado + sección activa
=============================== */

function updateActiveSection() {
  const viewportCenter = window.innerHeight / 2;

  let closestSection = null;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + rect.height / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
      currentIndex = index;
    }
  });

  if (!closestSection) return;

  // Actualizar color global
  const accent = getAccent(closestSection);
  document.documentElement.style.setProperty(
    "--accent",
    accent.join(",")
  );

  // Header activo
  navButtons.forEach((btn) => btn.classList.remove("nav-active"));

  const activeBtn = document.querySelector(
    `[data-index="${currentIndex}"]`
  );

  if (activeBtn) {
    activeBtn.classList.add("nav-active");
  }
}

/* ===============================
   Mezcla progresiva de colores
=============================== */

container.addEventListener("scroll", () => {
  const scrollTop = container.scrollTop;
  const height = window.innerHeight;

  const index = Math.floor(scrollTop / height);
  const progress = (scrollTop % height) / height;

  const current = sections[index];
  const next = sections[index + 1];

  if (current && next) {
    const from = getAccent(current);
    const to = getAccent(next);

    const mixed = lerpColor(from, to, progress);

    document.documentElement.style.setProperty(
      "--accent",
      mixed.join(",")
    );
  }

  updateActiveSection();
});
/* ===============================
   Reveal animations (FIX)
=============================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3
  }
);

reveals.forEach((el) => revealObserver.observe(el));
/* ===============================
   Hero play button
=============================== */

const playButton = document.getElementById("hero-play");

if (playButton) {
  playButton.addEventListener("click", () => {
    scrollToSection(1);
  });
}
/* ===============================
   About typing effect
=============================== */

const aboutText = document.getElementById("about-typing");

const aboutContent =
  "HI! MY NAME IS FRANCISCO MARTINEZ, AND I'M FROM ARGENTINA\n" +
  "I'M A STUDENT AT UTN (NATIONAL TECHNOLOGICAL UNIVERSITY)\n" +
  "MY EXPERIENCE INCLUDES FULL-STACK WEB DEVELOPMENT, PYTHON, AND JAVASCRIPT\n" +
  "I SPEAK THREE LANGUAGES FLUENTLY (SPANISH NATIVE, ENGLISH C2, AND ITALIAN C2)\n" +
  "AND I HAVE BASIC KNOWLEDGE OF GERMAN AND PORTUGUESE.";



let aboutIndex = 0;
let typingStarted = false;

function startTyping() {
  if (!aboutText || typingStarted) return;

  typingStarted = true;

  const interval = setInterval(() => {
    aboutText.textContent += aboutContent[aboutIndex];
    aboutIndex++;

    if (aboutIndex >= aboutContent.length) {
      clearInterval(interval);
    }
  }, 30);
}

/* Arranca cuando la sección entra en vista */
const aboutSection = document.getElementById("about");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startTyping();
      }
    });
  },
  { threshold: 0.5 }
);

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}
/* ===============================
   About → Diploma
=============================== */

const aboutMoreBtn = document.getElementById("about-more");

if (aboutMoreBtn) {
  aboutMoreBtn.addEventListener("click", () => {
    scrollToSection(3);
  });
}
/* ===============================
   Hero typing effect
=============================== */

const heroText = document.getElementById("hero-typing");

const heroContent = "<FRANCISCO MARTINEZ>";

let heroIndex = 0;
let heroTypingStarted = false;

function startHeroTyping() {
  if (!heroText || heroTypingStarted) return;

  heroTypingStarted = true;

  const interval = setInterval(() => {
    heroText.textContent += heroContent[heroIndex];
    heroIndex++;

    if (heroIndex >= heroContent.length) {
      clearInterval(interval);
    }
  }, 80);
}

/* Arranca cuando el hero entra en pantalla */
const heroSection = document.getElementById("hero");

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startHeroTyping();
      }
    });
  },
  { threshold: 0.6 }
);

if (heroSection) {
  heroObserver.observe(heroSection);
}
/* ===============================
   Diploma → Contact
=============================== */

const diplomaContactBtn = document.getElementById("diploma-contact");

if (diplomaContactBtn) {
  diplomaContactBtn.addEventListener("click", () => {
    scrollToSection(4);
  });
}
/* ===============================
   Contact → Hero
=============================== */

const contactHomeBtn = document.getElementById("contact-home");

if (contactHomeBtn) {
  contactHomeBtn.addEventListener("click", () => {
    scrollToSection(0);
  });
}
const stackNext = document.getElementById("stack-next");

if (stackNext) {
  stackNext.addEventListener("click", () => {
    scrollToSection(2); // ABOUT ME
  });
}
