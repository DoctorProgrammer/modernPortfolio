document.addEventListener('DOMContentLoaded', function() {
    const bigLetter = document.getElementById('bigLetter');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const offset = window.scrollY;

        //bigLetter.style.left = "calc(44% + " + offset * -1 + "px)";

        if (offset > 100) {
            navbar.classList.add('scrolled');
        }
    });
});