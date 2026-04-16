const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  return numeroVentas > VENTAS_BASE
    ? (numeroVentas - VENTAS_BASE) * precioProducto * 0.1
    : 0;
}

function calcular() {
  // Recuperar propiedades, agarrar su valor y pasarlo a un numero decimal.
  let salarioBase = getValueByIdFloat("txtSueldoBase");
  let numeroVentas = getValueByIdFloat("txtVentas");
  let precioProducto = getValueByIdFloat("txtPrecio");

  let comision = calcularComision(numeroVentas, precioProducto);
  let total = salarioBase + comision;

  mostrarMensaje("spSueldoBase", salarioBase);
  mostrarMensaje("spComision", comision);
  mostrarMensaje("spTotal", total);
}

$("#btnCalcular").addEventListener("click", calcular);