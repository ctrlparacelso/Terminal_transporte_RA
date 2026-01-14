// ================================
// Precios reales de las rutas
// ================================
const rutas = {
  "Cali-Florida": 7710,
  "Florida-Cali": 7710,
  "Florida-Miranda": 6000,
  "Miranda-Florida": 6000,
  "Florida-Palmira": 8200,
  "Palmira-Florida": 8200,
  "Florida-Corinto": 9300,
  "Corinto-Florida": 9300,
  "Florida-Pradera": 6800,
  "Pradera-Florida": 6800,
  "Florida-Villa gorgona": 6400,
  "Villa gorgona-Florida": 6400,
};

// ================================
// Buscar rutas
// ================================
document.getElementById("form-buscar").addEventListener("submit", (e) => {
  e.preventDefault();

  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const pasajeros = parseInt(document.getElementById("pasajeros").value);
  const clave = `${origen}-${destino}`;

  const lista = document.getElementById("lista-resultados");
  lista.innerHTML = "";

  if (origen === destino) {
    lista.innerHTML = "<li>El origen y destino no pueden ser iguales.</li>";
    return;
  }

  if (rutas[clave]) {
    const total = rutas[clave] * pasajeros;

    const li = document.createElement("li");
    li.textContent = `${origen} → ${destino} | Precio unitario: $${rutas[clave]} | Total: $${total}`;

    lista.appendChild(li);
  } else {
    lista.innerHTML = "<li>No hay ruta para esta combinación</li>";
  }
});

// ================================
// Simular compra
// ================================
document.getElementById("simular").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  const resumen = document.getElementById("resumen-detalles");

  if (nombre && correo) {
    resumen.textContent =
      `Compra simulada para ${nombre}, confirmación enviada a ${correo}`;
  } else {
    resumen.textContent =
      "Por favor llena los campos antes de simular la compra.";
  }
});

