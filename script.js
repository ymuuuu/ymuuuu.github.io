document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            window.location.href = target;
        });
    });

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s';
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = 1;
        });
    }, 500);
});