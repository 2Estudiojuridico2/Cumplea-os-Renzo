// Función para abrir la invitación con sonido
function abrirInvitacion() {
    const overlay = document.getElementById('intro-overlay');
    const sound = document.getElementById('thwip-sound');

    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Interacción necesaria para audio"));
    }

    overlay.classList.add('overlay-hidden');
}

// Efecto de telarañas al hacer clic
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('intro-overlay');
    if (overlay && !overlay.classList.contains('overlay-hidden')) return;

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

    setTimeout(() => {
        web.style.transform = 'translateY(-50px) scale(1.5)';
        web.style.opacity = '0';
        setTimeout(() => web.remove(), 800);
    }, 10);
});

// Movimiento dinámico para Spidey Patrulla
setInterval(() => {
    const spidi = document.querySelector('.spidey-swing');
    if(spidi) {
        const randomY = Math.floor(Math.random() * 40);
        spidi.style.top = (40 + randomY) + 'px';
    }
}, 2000);
