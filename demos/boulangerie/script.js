const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:60px;left:0;right:0;background:rgba(18,8,0,0.98);padding:1rem 2rem;gap:1rem;border-bottom:1px solid rgba(245,166,35,0.15);';
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.produit-card, .valeur, .horaires-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
