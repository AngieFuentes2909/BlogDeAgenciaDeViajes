// Esto lo modifiqué yo, Jesús, carga los detalles del destino en el modal.
const destinationModal = document.getElementById("destinationModal");

destinationModal.addEventListener("show.bs.modal", (event) => {
  const trigger = event.relatedTarget;

  document.getElementById("destinationModalTitle").textContent =
    trigger.dataset.destination;
  document.getElementById("destinationModalDescription").textContent =
    trigger.dataset.description;

  const image = document.getElementById("destinationModalImage");
  image.src = trigger.dataset.image;
  image.alt = `Paisaje de ${trigger.dataset.destination}`;
});