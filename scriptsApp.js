document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        let timeout;
        item.addEventListener('mouseenter', function() {
            timeout = setTimeout(() => {
                const hoverText = item.querySelector('.hover-text');
                if (hoverText) {
                    hoverText.style.display = 'block';
                }
            }, 1200); // 2 segundos de retraso
        });

        item.addEventListener('mouseleave', function() {
            clearTimeout(timeout);
            const hoverText = item.querySelector('.hover-text');
            if (hoverText) {
                hoverText.style.display = 'none';
            }
        });
    });
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
