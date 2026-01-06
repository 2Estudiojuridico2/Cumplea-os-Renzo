// 1. FUNCIÓN PRINCIPAL: ABRIR Y REPRODUCIR SONIDO
function abrirInvitacion() {
    const overlay = document.getElementById('intro-overlay');
    
    // CREAR AUDIO EN EL MOMENTO DEL CLIC (Esto evita bloqueos del navegador)
    const thwip = new Audio('https://www.myinstants.com/media/sounds/spiderman-ps4-web-shoot.mp3');
    thwip.volume = 0.6;
    thwip.play().catch(error => {
        console.log("El navegador no permitió el audio automático, pero la invitación se abrirá.");
    });

    // Ocultar la pantalla de carga
    if (overlay) {
        overlay.classList.add('overlay-hidden');
    }
}

// 2. EFECTO DE TELARAÑAS AL TOCAR LA PANTALLA
document.addEventListener('click', function(e) {
    // Verificamos que la invitación ya esté abierta
    const overlay = document.getElementById('intro-overlay');
    if (overlay && !overlay.classList.contains('overlay-hidden')) return;

    // Crear elemento div para la telaraña
    const web = document.createElement('div');
    web.innerHTML = '🕸️';
    web.style.position = 'fixed';
    web.style.left = (e.clientX - 20) + 'px';
    web.style.top = (e.clientY - 20) + 'px';
    web.style.fontSize = '50px';
    web.style.pointerEvents = 'none'; // Para que no interfiera con otros clics
    web.style.zIndex = '9999';
    web.style.transition = 'transform 0.5s, opacity 0.5s';
    
    document.body.appendChild(web);

    // Animación corta
    setTimeout(() => {
        web.style.transform = 'scale(1.5) rotate(20deg)';
        web.style.opacity = '0';
    }, 50);

    // Eliminar del código después de 1 segundo
    setTimeout(() => {
        web.remove();
    }, 1000);
});
