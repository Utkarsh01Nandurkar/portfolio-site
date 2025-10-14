
// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const onScroll = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', () => {
  onScroll();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
