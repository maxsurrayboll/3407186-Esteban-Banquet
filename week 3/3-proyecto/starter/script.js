console.log("Script cargado correctamente");

// =====================================
// ARRAYS PRINCIPALES
// =====================================

let items = [];
let usuarios = [];
let transacciones = [];


// =====================================
// CLASE PRODUCTO
// =====================================

class Producto {

    constructor(nombre, ubicacion, tipo) {

        this.id = Date.now().toString();
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.tipo = tipo;
        this.activo = true;
        this.fecha = new Date();

    }

}


// =====================================
// CREAR ITEM
// =====================================

function crearItem(nombre, ubicacion, tipo) {

    const nuevo = new Producto(nombre, ubicacion, tipo);

    items.push(nuevo);

    renderItems();
    actualizarStats();

}


// =====================================
// ELIMINAR
// =====================================

function eliminarItem(id) {

    items = items.filter(item => item.id !== id);

    renderItems();
    actualizarStats();

}


// =====================================
// RENDER ITEMS
// =====================================

function renderItems() {

    const container = document.getElementById("item-list");

    if (!container) return;

    container.innerHTML = "";

    if (items.length === 0) {

        container.innerHTML = "<p>No hay elementos</p>";
        return;

    }

    items.forEach(item => {

        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `
            <h3>💊 ${item.nombre}</h3>
            <p>📍 ${item.ubicacion}</p>
            <p>📦 Tipo: ${item.tipo}</p>

            <button onclick="eliminarItem('${item.id}')">
                Eliminar
            </button>
        `;

        container.appendChild(div);

    });

}


// =====================================
// ESTADISTICAS
// =====================================

function actualizarStats() {

    const total = document.getElementById("stat-total");

    if (total)
        total.textContent = items.length;

}


// =====================================
// MODAL
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("add-item-btn");
    const modal = document.getElementById("item-modal");
    const close = document.getElementById("close-modal");
    const cancel = document.getElementById("cancel-btn");
    const form = document.getElementById("item-form");

    if(btn)
        btn.onclick = () => modal.style.display = "block";

    if(close)
        close.onclick = () => modal.style.display = "none";

    if(cancel)
        cancel.onclick = () => modal.style.display = "none";

    if(form)
    form.addEventListener("submit", e => {

        e.preventDefault();

        const nombre =
            document.getElementById("item-name").value;

        const ubicacion =
            document.getElementById("item-location").value;

        const tipo =
            document.getElementById("item-type").value;

        crearItem(nombre, ubicacion, tipo);

        modal.style.display = "none";

        form.reset();

    });


    // =====================================
    // DATOS INICIALES
    // =====================================

    crearItem("Paracetamol", "Estante A1", "Medicamento");
    crearItem("Ibuprofeno", "Estante B2", "Medicamento");

});
