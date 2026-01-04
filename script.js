document.addEventListener('click', function(e) {
  const web = document.createElement('div');
  web.innerHTML = '🕸️';
  web.style.position = 'fixed';
  web.style.left = (e.clientX - 40) + 'px';
  web.style.top = (e.clientY - 40) + 'px';
  web.style.fontSize = '60px';
  web.style.pointerEvents = 'none';
  web.style.zIndex = '9999';
  web.style.transition = 'all 0.8s ease-out';
  
  document.body.appendChild(web);

  // Animación: sube y desaparece
  setTimeout(() => {
    web.style.transform = 'translateY(-50px) scale(1.5)';
    web.style.opacity = '0';
    setTimeout(() => web.remove(), 800);
  }, 10);
});
