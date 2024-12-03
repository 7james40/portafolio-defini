document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        themeToggle.textContent = savedTheme === 'day' ? 'Modo Noche' : 'Modo Día';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('day')) {
            body.className = 'night';
            themeToggle.textContent = 'Modo Día';
        } else {
            body.className = 'day';
            themeToggle.textContent = 'Modo Noche';
        }

        localStorage.setItem('theme', body.className);
    });
});

// Inicializa AOS cuando la página se carga
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      duration: 1200, // Duración de la animación
      easing: 'ease-in-out', // Efecto de la animación
    });
  });
  