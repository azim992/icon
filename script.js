document.addEventListener('DOMContentLoaded', function () {
    const requirements = document.querySelectorAll('.requirement');

    requirements.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = '0.3s';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});