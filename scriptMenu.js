
document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti i bottoni
    const buttons = document.querySelectorAll(".btn-menu");

    document.getElementById('menu-title').textContent = "PER INIZIARE";
    document.getElementById('menu-image').src = "img/menu/perIniziare.jpg"

    buttons.forEach(button => {
      button.addEventListener("click", function() {
        // Rimuove la classe active da tutti i bottoni
        buttons.forEach(btn => btn.classList.remove("active"));
        // Aggiunge la classe active al bottone cliccato
        this.classList.add("active");

        //Legge i dati personalizzati dal bottone
  
        const title = this.getAttribute('data-title');
        const imageSrc = this.getAttribute('data-image');

        //Cambia il menù
        changeMenu(title, imageSrc);
      });
    });

    // La tua funzione esistente
    function changeMenu(title, imageSrc) {
      console.log("Cambio menu:", title, imageSrc);  // 👈 verifica cosa arriva
      document.getElementById('menu-title').textContent = title;
      document.getElementById('menu-image').src = imageSrc;
    }
  });