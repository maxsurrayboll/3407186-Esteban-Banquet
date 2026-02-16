// =====================================
// SISTEMA DE GESTIÓN DE FARMACIAS
// SEMANA 2
// =====================================

let items = [];

// Categorías farmacia
const categorias = [
    "Medicamento",
    "Cliente",
    "Proveedor",
    "Inventario",
    "Venta"
];

// Prioridades
const prioridades = [
    "Alta",
    "Media",
    "Baja"
];

// Generar ID
function generarId() {
    return Date.now().toString();
}

// Crear item
function crearItem(nombre, descripcion, categoria, prioridad) {

    const nuevoItem = {
        id: generarId(),
        nombre,
        descripcion,
        categoria,
        prioridad,
        activo: true,
        fecha: new Date()
    };

    items = [...items, nuevoItem];

    renderItems();
}

// Eliminar item
function eliminarItem(id) {

    items = items.filter(item => item.id !== id);

    renderItems();
}

// Renderizar items
function renderItems() {

    const container = document.querySelector("#item-list");

    if (!container) return;

    container.innerHTML = "";

    items.forEach(item => {

        const div = document.createElement("div");

        div.innerHTML = `
            <div class="item-card">
                <h3><strong>💊 ${item.nombre}</strong></h3>
                <p>${item.descripcion}</p>
                <p><strong>Categoría:</strong> ${item.categoria}</p>
                <p><strong>Prioridad:</strong> ${item.prioridad}</p>

                <button onclick="eliminarItem('${item.id}')">
                    Eliminar
                </button>
            </div>
        `;

        container.appendChild(div);

    });

    actualizarStats();
}


// Actualizar estadísticas
function actualizarStats() {

    const total = items.length;

    document.querySelectorAll("span").forEach(span => {

        if(span.textContent === "0") {
            span.textContent = total;
        }

    });
}

// Evento formulario
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", e => {

        e.preventDefault();

        const nombre = document.querySelector("input").value;
        const descripcion = document.querySelector("textarea").value;
        const categoria = document.querySelectorAll("select")[0].value;
        const prioridad = document.querySelectorAll("select")[1].value;

        crearItem(nombre, descripcion, categoria, prioridad);

        form.reset();

    });

});


// Datos iniciales farmacia
items = [
    {
        id: generarId(),
        nombre: "Paracetamol",
        descripcion: "Medicamento para el dolor",
        categoria: "Medicamento",
        prioridad: "Alta",
        activo: true
    },
    {
        id: generarId(),
        nombre: "Ibuprofeno",
        descripcion: "Antiinflamatorio",
        categoria: "Medicamento",
        prioridad: "Media",
        activo: true
    }
];

renderItems();
