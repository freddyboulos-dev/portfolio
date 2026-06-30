// Formulaire
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('success').style.display = 'block';
    btn.style.display = 'none';
    e.target.reset();
  }, 1200);
}

// Burger menu
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const btnNav = document.querySelector('.btn-nav');
    if (links.style.display === 'flex') {
      links.style.display = 'none';
      if (btnNav) btnNav.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:60px;left:0;right:0;background:rgba(10,22,40,0.98);padding:1rem 2rem;gap:1rem;border-bottom:1px solid rgba(232,196,74,0.15);';
      if (btnNav) btnNav.style.display = 'none';
    }
  });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .why-item, .contact-form').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
