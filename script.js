// Función para abrir la invitación
function abrirInvitacion() {
    const overlay = document.getElementById('intro-overlay');
    overlay.classList.add('overlay-hidden');
    console.log("¡Misión iniciada para Renzo!");
}

// Evento único para las telarañas al hacer clic
document.addEventListener('click', function(e) {
    // Solo crea telarañas si ya se abrió la invitación
    const overlay = document.getElementById('intro-overlay');
    if(overlay && !overlay.classList.contains('overlay-hidden')) return;

    const web = document.createElement('div');
    web.innerHTML = '🕸️';
    web.style.position = 'fixed';
    web.style.left = (e.clientX - 30) + 'px';
    web.style.top = (e.clientY - 30) + 'px';
    web.style.fontSize = '60px';
    web.style.pointerEvents = 'none';
    web.style.zIndex = '9999';
    web.style.transition = 'all 0.8s ease-out';
    
    document.body.appendChild(web);

    // Animación: sube, crece y desaparece
    setTimeout(() => {
        web.style.transform = 'translateY(-50px) scale(1.5)';
        web.style.opacity = '0';
        setTimeout(() => web.remove(), 800);
    }, 10);
});
