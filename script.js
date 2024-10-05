// Toggle Navigation Menu for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // For demonstration, we'll just log the input
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form
    contactForm.reset();

    alert("Thank you for your message!");
})