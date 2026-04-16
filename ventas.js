const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  return numeroVentas > VENTAS_BASE
    ? (numeroVentas - VENTAS_BASE) * precioProducto * 0.1
    : 0;
}

function calcular() {
  // Recuperar propiedades, agarrar su valor y pasarlo a un numero decimal.
  let salarioBase = parseFloat(document.getElementById("txtSueldoBase").value);
  let numeroVentas = parseFloat(document.getElementById("txtVentas").value);
  let precioProducto = parseFloat(document.getElementById("txtPrecio").value);

  let comision = calcularComision(numeroVentas, precioProducto);
  let total = salarioBase + comision;

  document.getElementById("spSueldoBase").textContent = salarioBase;
  document.getElementById("spComision").textContent = comision;
  document.getElementById("spTotal").textContent = total;
}