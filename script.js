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
function comenzarMision() {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hidden-intro');
  
  // Opcional: Sonido de telaraña si tienes uno
  console.log("Misión iniciada...");
}
function abrirInvitacion() {
    const overlay = document.getElementById('intro-overlay');
    
    // Efecto de salida: se desliza hacia arriba
    overlay.classList.add('overlay-hidden');
    
    // Guardar en el navegador que ya vio la intro (opcional)
    console.log("¡Misión iniciada para Renzo!");
}

// Opcional: Que aparezcan telarañas al hacer clic en cualquier lado después
document.addEventListener('click', function(e) {
  if(!document.getElementById('intro-overlay').classList.contains('overlay-hidden')) return;
  
  const web = document.createElement('div');
  web.innerHTML = '🕸️';
  web.style.position = 'fixed';
  web.style.left = (e.clientX - 25) + 'px';
  web.style.top = (e.clientY - 25) + 'px';
  web.style.fontSize = '50px';
  web.style.zIndex = '500';
  web.style.pointerEvents = 'none';
  document.body.appendChild(web);

  setTimeout(() => {
    web.style.transition = 'opacity 0.5s';
    web.style.opacity = '0';
    setTimeout(() => web.remove(), 500);
  }, 1000);
});
