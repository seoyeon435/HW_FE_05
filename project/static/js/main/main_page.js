const categoryLinks = document.querySelectorAll('.category-bar a');


categoryLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});
