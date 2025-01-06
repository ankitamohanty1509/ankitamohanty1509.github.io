// Navigation functionality
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        const target = link.getAttribute('href');
        if (target.startsWith('#')) {
            event.preventDefault();
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Show more functionality on the About Me page
const showMoreBtn = document.getElementById('showMoreBtn');
const extraInfo = document.getElementById('extraInfo');

if (showMoreBtn && extraInfo) {
    showMoreBtn.addEventListener('click', () => {
        if (extraInfo.style.display === 'none') {
            extraInfo.style.display = 'block';
            showMoreBtn.textContent = 'Show Less About Me';
        } else {
            extraInfo.style.display = 'none';
            showMoreBtn.textContent = 'Show More About Me';
        }
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const github = formData.get('github');
        const linkedin = formData.get('linkedin');

        // Basic validation (optional, can expand as needed)
        if (!name || !email || !github || !linkedin) {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.style.color = 'red';
            return;
        }

        // Simulate form submission (replace with actual backend call if needed)
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
        formResponse.style.color = 'green';

        // Clear the form
        contactForm.reset();
    });
}

// Project page smooth scroll (if needed for in-page links)
document.querySelectorAll('#project a').forEach(link => {
    link.addEventListener('click', event => {
        const target = link.getAttribute('href');
        if (target.startsWith('#')) {
            event.preventDefault();
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
