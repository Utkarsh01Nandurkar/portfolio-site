// Typed text (roles) — Ashutosh-like behaviour
const roles = [
  "DevOps & Cloud Engineer",
  "AWS · Docker · Kubernetes",
  "Terraform · CI/CD · Monitoring"
];
const el = document.getElementById("typed-text");
let i = 0, j = 0, deleting = false;

function typeLoop(){
  const word = roles[i % roles.length];
  if(!deleting){
    el.textContent = word.slice(0, ++j);
    if(j === word.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
  }else{
    el.textContent = word.slice(0, --j);
    if(j === 0){ deleting = false; i++; }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
function onScroll(){
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach((node)=> {
    const top = node.getBoundingClientRect().top;
    if(top < trigger) node.classList.add("visible");
  });
}

// Nav active link on scroll (simple)
const sections = ["home","about","skills","projects","contact"].map(id => document.getElementById(id));
const links = document.querySelectorAll(".nav .links .nav-link");
function updateActive(){
  let idx = 0, min = Infinity;
  sections.forEach((s, i)=>{
    const d = Math.abs(s.getBoundingClientRect().top);
    if(d < min){ min = d; idx = i; }
  });
  links.forEach(l => l.classList.remove("active"));
  if(links[idx]) links[idx].classList.add("active");
}

// Mobile menu (visual only)
const toggle = document.querySelector(".nav-toggle");
if(toggle){
  toggle.addEventListener("click", ()=>{
    document.querySelector(".links").classList.toggle("open");
  });
}

// Footer year and init
window.addEventListener("load", ()=>{
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  typeLoop();
  onScroll();
  updateActive();
});
window.addEventListener("scroll", ()=>{
  onScroll();
  updateActive();
});
