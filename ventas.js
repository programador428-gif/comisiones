const VENTAS_BASE = 5;

const validarSueldo = () => {
  const val = $("#txtSueldoBase").value;
  if (val === "" || parseFloat(val) < 0) {
    mostrarError("txtSueldoBase", "El sueldo no puede estar vacío ni ser negativo");
    return false;
  }
  return true;
};

const validarVentas = () => {
  const val = $("#txtVentas").value;
  if (val.length > 5) {
    mostrarError("txtVentas", "Máximo 5 caracteres");
    return false;
  }
  if (val === "" || parseFloat(val) < 0) {
    mostrarError("txtVentas", "Las ventas no pueden ser negativas o vacías");
    return false;
  }
  return true;
};

const validarPrecio = () => {
  const val = $("#txtPrecio").value;
  if (val === "" || parseFloat(val) < 0) {
    mostrarError("txtPrecio", "Precio inválido o vacío");
    return false;
  }
  return true;
};

function refrescarEstadoBoton() {
  const erroresActivos = document.querySelectorAll('[id^="err-"]').length;
  $("#btnCalcular").disabled = erroresActivos > 0;
  $("#btnCalcular").style.opacity = erroresActivos > 0 ? "0.5" : "1";
  $("#btnCalcular").style.cursor = erroresActivos > 0 ? "not-allowed" : "pointer";
}

function calcularComision(numeroVentas, precioProducto) {
  return numeroVentas > VENTAS_BASE
    ? (numeroVentas - VENTAS_BASE) * precioProducto * 0.1
    : 0;
}

function calcular() {
  if (!validarSueldo() || !validarVentas() || !validarPrecio()) {
    alert("Revisa los campos con errores");
    return;
  }

  let salarioBase = getValueByIdFloat("txtSueldoBase");
  let numeroVentas = getValueByIdFloat("txtVentas");
  let precioProducto = getValueByIdFloat("txtPrecio");

  let comision = calcularComision(numeroVentas, precioProducto);
  let total = salarioBase + comision;

  mostrarMensaje("spSueldoBase", salarioBase.toFixed(2));
  mostrarMensaje("spComision", comision.toFixed(2));
  mostrarMensaje("spTotal", total.toFixed(2));
}

document.addEventListener("DOMContentLoaded", () => {
  const inputs = [
    { id: "txtSueldoBase", fn: validarSueldo },
    { id: "txtVentas", fn: validarVentas },
    { id: "txtPrecio", fn: validarPrecio }
  ];

  inputs.forEach(item => {
    const el = $(`#${item.id}`);

    el.addEventListener("blur", () => {
      item.fn();
      refrescarEstadoBoton();
    });

    el.addEventListener("focus", () => {
      limpiarError(item.id);
      refrescarEstadoBoton();
    });
  });

  $("#btnCalcular").addEventListener("click", calcular);
});