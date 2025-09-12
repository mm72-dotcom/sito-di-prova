function toggleInfo() {
    const info = document.getElementById("extraInfo");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}


// Gestione form di contatto (simulazione)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // evita il refresh della pagina
            response.style.display = "block";
            form.reset(); // pulisce i campi
        });
    }
});


// Cambia immagine al click
const img = document.getElementById("switchImage");
if (img) {
    img.addEventListener("click", () => {
        if (img.src.includes("foto1.jpg")) {
            img.src = "images/foto2.jpg";
        } else {
            img.src = "images/foto1.jpg";
        }
    });
}
