document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.background-container img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 6000); // Cambia cada 5 segundos
});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.smooth-transition');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});