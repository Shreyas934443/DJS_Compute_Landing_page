
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('navbar-scrolled', window.scrollY > 50);
});


document.getElementById('year').textContent = new Date().getFullYear();


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