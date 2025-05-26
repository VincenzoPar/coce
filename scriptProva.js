<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  // Ritardo per garantire che tutto sia renderizzato
  setTimeout(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Quando l'elemento entra nel viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visibile');
          observer.unobserve(entry.target); // smette di osservarlo
        }
      });
    }, {
      threshold: 0.1 // attiva quando almeno il 10% è visibile
    });

    // Osserva solo gli elementi visibili (escludi quelli con display: none)
    document.querySelectorAll('.scritta-nascosta').forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.display !== 'none') {
        observer.observe(el);
      }
    });
  }, 300); // delay per sicurezza
});

window.addEventListener('resize', () => {
  // Rilancia tutto se necessario
  window.location.reload();
=======
document.addEventListener('DOMContentLoaded', function () {
  // Ritardo per garantire che tutto sia renderizzato
  setTimeout(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Quando l'elemento entra nel viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visibile');
          observer.unobserve(entry.target); // smette di osservarlo
        }
      });
    }, {
      threshold: 0.1 // attiva quando almeno il 10% è visibile
    });

    // Osserva solo gli elementi visibili (escludi quelli con display: none)
    document.querySelectorAll('.scritta-nascosta').forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.display !== 'none') {
        observer.observe(el);
      }
    });
  }, 300); // delay per sicurezza
});

window.addEventListener('resize', () => {
  // Rilancia tutto se necessario
  window.location.reload();
>>>>>>> c7cdcc7813865e06aa6dc4ebb9fbdea8d7764a2a
});