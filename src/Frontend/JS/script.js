document.addEventListener('DOMContentLoaded', function() {
    const bigLetter = document.getElementById('bigLetter');

    // when scrolled, the big letters will move to the left the same amount as the scroll
    window.addEventListener('scroll', function() {
        const offset = window.scrollY * -1;
        console.log(offset);
        bigLetter.style.left = "calc(44% + " + offset + "px)";
    });
});