function $(selector) {
  return document.querySelector(selector);
}

function getValueByIdFloat(id) {
  const elemento = $(`#${id}`);
  return parseFloat(elemento.value) || 0;
}

function mostrarMensaje(id, mensaje) {
  return $(`#${id}`).textContent = mensaje;
}