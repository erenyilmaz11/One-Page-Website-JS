// Lightbox configuration
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'albumLabel': 'Artwork %1 of %2',
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'positionFromTop': 50
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Form handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    alert('Thank you for your message. We will get back to you soon.');
    form.reset();
});

// Scroll-based navigation highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 