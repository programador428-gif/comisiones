function $(selector) {
  return document.querySelector(selector);
}

function getValueByIdFloat(id) {
  const elemento = $(`#${id}`);
  return parseFloat(elemento.value) || 0;
}

function mostrarMensaje(id, mensaje) {
  const elemento = $(`#${id}`);
  if (elemento) elemento.textContent = mensaje;
}

function mostrarError(idInput, mensaje) {
  const input = $(`#${idInput}`);
  input.style.borderColor = "var(--neon-rosa)";

  let errorMsg = $(`#err-${idInput}`);
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.id = `err-${idInput}`;
    errorMsg.style.color = "var(--neon-rosa)";
    errorMsg.style.fontSize = "0.8rem";
    errorMsg.style.marginTop = "-10px";
    errorMsg.style.marginBottom = "15px";
    input.insertAdjacentElement("afterend", errorMsg);
  }
  errorMsg.textContent = mensaje;
}

function limpiarError(idInput) {
  const input = $(`#${idInput}`);
  input.style.borderColor = "#000";

  const errorMsg = $(`#err-${idInput}`);
  if (errorMsg) {
    errorMsg.remove();
  }
}