// Script para animaciones y mejoras futuras

document.addEventListener("DOMContentLoaded", () => {
  console.log("Incubadora con termostato - Proyecto cargado correctamente 🚀");
  
  // Efecto al hacer clic en imágenes
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      alert("Esta es la incubadora en funcionamiento 🐣");
    });
  });
});
