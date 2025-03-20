import emailjs from "emailjs-com";

document.addEventListener("DOMContentLoaded", function () {
  console.log("El script contact.js se ha cargado y está listo.");

  emailjs.init("U8kP4mwoYqzeuLrAN"); // Reemplaza con tu clave pública

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_1hgmyzr", "template_cvw6e3y", this)
      .then(() => {
        showAlert("¡Mensaje enviado con éxito!", "success");
        this.reset(); // Limpia el formulario después del envío
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        showAlert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.", "error");
      });
  });

  function showAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = ""; // Limpia alertas anteriores

    const alert = document.createElement("div");
    alert.classList.add("alert", type);
    alert.textContent = message;

    alertContainer.appendChild(alert);

    // Mostrar la alerta
    setTimeout(() => alert.classList.add("show"), 10);

    // Ocultar después de 4 segundos
    setTimeout(() => {
      alert.classList.remove("show");
      alert.classList.add("hide");
      setTimeout(() => alert.remove(), 500);
    }, 4000);
  }
});
