import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderHead, b as renderComponent, d as renderScript } from '../chunks/astro/server_BRTe25kp.mjs';
import 'piccolore';
import 'html-escaper';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full h-20 md:h-28 flex items-center justify-between px-6 md:px-20 z-50 header"> <span class="text-2xl tracking-widest cursor-pointer hover:opacity-70 transition">
FM
</span> <nav class="hidden md:flex gap-8 lg:gap-16 text-sm md:text-lg tracking-widest"> <button data-index="0" class="hover:opacity-70 transition">HOME</button> <button data-index="1" class="hover:opacity-70 transition">STACKS</button> <button data-index="2" class="hover:opacity-70 transition">ABOUT</button> <button data-index="3" class="hover:opacity-70 transition">DIPLOMA</button> <button data-index="4" class="hover:opacity-70 transition">CONTACT</button> </nav> </header>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" data-theme="hero" class="section relative z-10 h-screen flex items-center justify-center"> <div class="flex flex-col items-center gap-8 -translate-y-12"> <h1 class="reveal text-4xl sm:text-5xl md:text-7xl xl:text-8xl tracking-widest text-[rgb(var(--accent))] hero-name text-center"> <span id="hero-typing"></span><span class="cursor">_</span> </h1> <p class="reveal text-base sm:text-lg md:text-2xl tracking-widest opacity-60 subtitle text-center">
FULLSTACK WEB DEVELOPER
</p> <div class="checkpoint-signal reveal"> <div class="signal-frame"> <span class="scan-line"></span> <span class="pixel p1"></span> <span class="pixel p2"></span> <span class="pixel p3"></span> <span class="pixel p4"></span> </div> </div> <button id="hero-play" class="play-button reveal hero-button" aria-label="Ir a stack">
▶
</button> </div> </section>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/sections/Hero.astro", void 0);

const $$Stack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="stack" data-theme="stack" class="section relative z-10 h-screen flex flex-col items-center pt-40"> <h2 class="reveal text-7xl tracking-widest text-[rgb(var(--accent))] mb-24">
STACKS
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">HTML</span> </div> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">CSS</span> </div> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">JAVASCRIPT</span> </div> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">ASTRO</span> </div> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">TAILWIND</span> </div> <div class="card reveal"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">NODE</span> </div> </div> <button id="stack-next" class="play-button mt-20 reveal">
↓
</button> </section>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/sections/Stack.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" data-theme="about" class="section relative z-10 h-screen flex flex-col items-center pt-36"> <h2 class="reveal text-7xl tracking-widest text-[rgb(var(--accent))] mb-20">
ABOUT ME
</h2> <p id="about-typing" class="typing-text text-base sm:text-lg md:text-2xl max-w-xl md:max-w-5xl text-center leading-relaxed px-4"></p> <div class="hud-animation reveal"> <span class="hud-block"></span> <span class="hud-block"></span> <span class="hud-block"></span> </div> <button id="about-more" class="play-button mt-16 reveal">
↓
</button> </section>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/sections/About.astro", void 0);

const $$Diplomas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="diplomas" data-theme="diplomas" class="section relative z-10 h-screen flex flex-col items-center pt-40"> <h2 class="reveal text-7xl tracking-widest text-[rgb(var(--accent))] mb-24">
DIPLOMA
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> <div class="diploma-item reveal"> <div class="card"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">PYTHON</span> </div> <a href="https://pub.coderhouse.com/certificates/09c7f3da-671c-44fe-9927-cd4fdb883464?v=1" class="card-button" target="_blank" rel="noopener noreferrer">
SEE
</a> </div> <!-- Diploma 2 --> <div class="diploma-item reveal"> <div class="card"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name text-center leading-snug">
WEB<br>DEVELOP
</span> </div> <a href="https://lnkd.in/eETzir5T" class="card-button" target="_blank" rel="noopener noreferrer">
SEE
</a> </div> <!-- Diploma 3 --> <div class="diploma-item reveal"> <div class="card"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">ENGLISH</span> </div> <a href="https://drive.google.com/file/d/1-5Ibf35iGdJghCLG92C5N_abXHBK9igN/view?usp=sharing" class="card-button" target="_blank" rel="noopener noreferrer">
SEE
</a> </div> </div> <!-- Diploma animation --> <div class="diploma-anim reveal"> <div class="diploma-paper"> <div class="diploma-top"></div> <span class="diploma-line"></span> <span class="diploma-line short"></span> <div class="diploma-seal"></div> </div> </div> <button id="diploma-contact" class="play-button reveal">
CONTACT ME
</button> </section>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/sections/Diplomas.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" data-theme="contact" class="section relative z-10 h-screen flex flex-col items-center pt-40"> <h2 class="contact-titulo reveal text-7xl tracking-widest text-[rgb(var(--accent))] mb-24">
CONTACT
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> <a href="https://www.instagram.com/franmarttinnez/" target="_blank" rel="noopener noreferrer" class="card reveal flex flex-col items-center justify-center card card-link"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">INSTAGRAM</span> </a> <a href="https://www.linkedin.com/in/francisco-martinez-233632338/" target="_blank" rel="noopener noreferrer" class="card reveal card-linkedin flex flex-col items-center justify-center card card-link"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">LINKEDIN</span> </a> <a href="https://github.com/franciscomarttinnez" target="_blank" rel="noopener noreferrer" class="card reveal card-github flex flex-col items-center justify-center card card-link"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">GITHUB</span> </a> <a href="https://wa.me/543625174899" target="_blank" rel="noopener noreferrer" class="card reveal card-whatsapp flex flex-col items-center justify-center card card-link"> <div class="stack-icon"> <span class="square back"></span> <span class="square front"></span> </div> <span class="stack-name">WHATSAPP</span> </a> </div> <button id="contact-home" class="play-button home-button mt-24 reveal"> <span class="home-icon"> <span class="home-roof"></span> <span class="home-body"></span> </span> </button> </section>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/sections/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet"><title>Francisco Martinez</title>${renderHead()}</head> <body class="bg-black text-white"> <div class="glow-left"></div> <div class="glow-right"></div> <div class="background-grid"></div> ${renderComponent($$result, "Header", $$Header, {})} <main id="scroll-container" class="h-screen overflow-y-scroll relative z-10"> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Stack", $$Stack, {})} ${renderComponent($$result, "About", $$About, {})} ${renderComponent($$result, "Diplomas", $$Diplomas, {})} ${renderComponent($$result, "Contact", $$Contact, {})} </main> ${renderScript($$result, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/pages/index.astro", void 0);

const $$file = "C:/Users/franm/OneDrive/Desktop/portfolio-checkpoint/src/pages/index.astro";
const $$url = "/PortfolioFranciscoMartinez";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
