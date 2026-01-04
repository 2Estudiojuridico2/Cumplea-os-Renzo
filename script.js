
document.addEventListener('click', function(e) {
  // Crear el elemento telaraña
  const web = document.createElement('div');
  web.innerHTML = '🕸️';
  web.style.position = 'fixed';
  web.style.left = (e.clientX - 20) + 'px';
  web.style.top = (e.clientY - 20) + 'px';
  web.style.fontSize = '40px';
  web.style.pointerEvents = 'none';
  web.style.zIndex = '1000';
  
  document.body.appendChild(web);

  // Animación de desvanecimiento
  setTimeout(() => {
    web.style.transition = 'opacity 0.5s';
    web.style.opacity = '0';
    setTimeout(() => web.remove(), 500);
  }, 1000);
});
