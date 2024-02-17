document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme');

    themeToggle.addEventListener('click', function () {
        if (themeLink.getAttribute('href') === './light.css') {
            themeLink.href = './dark.css';
            themeToggle.textContent = 'Light';
        } else {
            themeLink.href = './light.css';
            themeToggle.textContent = 'Dark';
        }
    });
});
