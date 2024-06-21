// click.js
document.querySelectorAll('#menuList a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.getElementById('menuBar').offsetHeight,
            behavior: 'smooth'
        });
    });
});
