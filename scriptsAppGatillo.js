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
