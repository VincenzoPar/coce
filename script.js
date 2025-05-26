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
});