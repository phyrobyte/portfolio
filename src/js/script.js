window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.opacity = 1;
    } else {
        footer.style.opacity = 0;
    }
});
