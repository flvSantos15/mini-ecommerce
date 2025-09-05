const form = document.getElementById("form-contato");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
})