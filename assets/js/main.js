// reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
function onScroll(){
  const t = window.innerHeight * 0.88;
  revealEls.forEach(n => { if(n.getBoundingClientRect().top < t) n.classList.add("visible"); });
}
window.addEventListener("load", onScroll);
window.addEventListener("scroll", onScroll);

// footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
