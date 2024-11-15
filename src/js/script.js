document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const headlines = [
    "Important Info",
    "Learn About My Projects",
    "Explore Trajectory Sandbox"
];
let headlineIndex = 0;

function changeHeadline() {
    document.getElementById("animatedHeadline").textContent = headlines[headlineIndex];
    headlineIndex = (headlineIndex + 1) % headlines.length;
}

setInterval(changeHeadline, 3000); // Change every 3 seconds

