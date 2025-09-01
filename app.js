// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Bootstrap validation for contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  } else {
    e.preventDefault();
    alert('Thanks for reaching out! We will get back to you shortly.');
    e.target.reset();
  }
  e.target.classList.add('was-validated');
});