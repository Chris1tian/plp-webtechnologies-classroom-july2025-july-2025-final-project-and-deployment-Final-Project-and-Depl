// Toggle menu for mobile
const nav = document.querySelector('nav ul');
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.className = 'menu-btn';
document.querySelector('header').prepend(menuBtn);
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Gallery modal popup
const images = document.querySelectorAll('.gallery-img');
if (images.length) {
    images.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `<img src="${img.src}" style="max-width:90vw;max-height:90vh;"><span class="close">&times;</span>`;
            document.body.appendChild(modal);
            modal.querySelector('.close').onclick = () => modal.remove();
        });
    });
}

// Contact form validation
const contactForm = document.getElementById('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        let msg = '';
        if (!name || !email || !message) {
            msg = 'Please fill in all fields.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            msg = 'Please enter a valid email.';
        } else {
            msg = 'Thank you for contacting us! We will get back to you soon.';
            contactForm.reset();
        }
        document.getElementById('form-message').textContent = msg;
    });
}

// Booking form validation
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = bookingForm.name.value.trim();
        const email = bookingForm.email.value.trim();
        const destination = bookingForm.destination.value;
        const dates = bookingForm.dates.value.trim();
        let msg = '';
        if (!name || !email || !destination || !dates) {
            msg = 'Please fill in all fields.';
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            msg = 'Please enter a valid email.';
        } else {
            msg = `Thank you, ${name}! Your booking for ${destination.replace('-', ' ')} is received.`;
            bookingForm.reset();
        }
        document.getElementById('booking-message').textContent = msg;
    });
}

// Simple scroll animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 50) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        } else {
            sec.style.opacity = 0.5;
            sec.style.transform = 'translateY(40px)';
        }
    });
});