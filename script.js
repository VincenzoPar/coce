<<<<<<< HEAD
window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    // Altri elementi nascosti (es. scritte)
    const scritte = document.querySelectorAll('.scritta-nascosta');

    scritte.forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visibile');
        }
    });
});
    
// In caso siano già visibili al caricamento
window.addEventListener('load', function () {
    window.dispatchEvent(new Event('scroll'));
});

window.addEventListener('resize', () => {
  // Rilancia tutto se necessario
  window.dispatchEvent(new Event('scroll'));
=======
window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    // Altri elementi nascosti (es. scritte)
    const scritte = document.querySelectorAll('.scritta-nascosta');

    scritte.forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visibile');
        }
    });
});
    
// In caso siano già visibili al caricamento
window.addEventListener('load', function () {
    window.dispatchEvent(new Event('scroll'));
});

window.addEventListener('resize', () => {
  // Rilancia tutto se necessario
  window.dispatchEvent(new Event('scroll'));
>>>>>>> c7cdcc7813865e06aa6dc4ebb9fbdea8d7764a2a
});