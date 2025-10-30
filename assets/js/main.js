document.addEventListener('DOMContentLoaded',()=>{
  const splash=document.getElementById('splash');
  if(splash){ setTimeout(()=>{ splash.style.opacity='0'; setTimeout(()=>{ if(splash && splash.parentNode) splash.parentNode.removeChild(splash) },600) },2200) }
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',function(e){ e.preventDefault(); const target=document.querySelector(this.getAttribute('href')); if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}) } const nav=document.querySelector('.nav'); if(nav && window.innerWidth<900) nav.style.display='none' })
  });
  const sections=Array.from(document.querySelectorAll('section[id]'));
  const navLinks=Array.from(document.querySelectorAll('.nav a.nav-link'));
  function onScroll(){ const scrollPos=window.scrollY+140; sections.forEach(sec=>{ if(sec.offsetTop<=scrollPos && (sec.offsetTop+sec.offsetHeight)>scrollPos){ navLinks.forEach(l=>l.classList.remove('active')); const active=document.querySelector('.nav a[href="#'+sec.id+'"]'); if(active) active.classList.add('active') } }) }
  window.addEventListener('scroll', onScroll); onScroll();
  document.querySelector('.menu-toggle')?.addEventListener('click',()=>{ const nav=document.querySelector('.nav'); if(!nav) return; nav.style.display=(nav.style.display==='flex')?'none':'flex'; nav.style.flexDirection='column' });
  document.getElementById('back-to-top')?.addEventListener('click', e=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}) });
});
