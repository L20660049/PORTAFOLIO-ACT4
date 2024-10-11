// Seleccionar el modal y los elementos necesarios
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgModalContent');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Seleccionar todas las imágenes de la galería
const images = document.querySelectorAll('.gallery-img');

// Añadir un evento de clic a cada imagen de la galería
images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Cerrar el modal cuando se haga clic en el botón de cierre
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de la imagen
modal.onclick = function(event) {
  if (event.target !== modalImg) {
    modal.style.display = 'none';
  }
}
