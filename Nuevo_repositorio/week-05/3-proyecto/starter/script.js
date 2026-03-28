// ==========================================
// SISTEMA DE GESTIÓN DE FARMACIA (vista en html)
// ==========================================

//LISTA DE MEDICAMENTOS
let medicamentos = [
    {
        nombre: "Acetaminofén",
        stock: 15,
        precio: 2500,
        tipo: "generico",
        requiereReceta: false,
        fechaVencimiento: "2026-05-10",
        proveedor: null,
        laboratorio: {
            nombre: "Genfar",
            pais: "Colombia"
        }
    },
    {
        nombre: "Ibuprofeno",
        stock: 5,
        precio: 3000,
        tipo: "generico",
        requiereReceta: false,
        fechaVencimiento: "2025-04-01",
        proveedor: "Distribuidora XYZ",
        laboratorio: {
            nombre: "Bayer",
            pais: "Alemania"
        }
    },
    {
        nombre: "Amoxicilina",
        stock: 0,
        precio: 12000,
        tipo: "controlado",
        requiereReceta: true,
        fechaVencimiento: "2024-12-01",
        proveedor: null,
        laboratorio: null
    }
];

//FUNCION

// Calcular valor total por medicamento
function calcularValorInventario(stock, precio) {
    return stock * precio;
}

// Clasificar stock
function clasificarStock(stock) {
    if (stock <= 0) return "SIN STOCK";
    if (stock <= 10) return "CRÍTICO";
    if (stock <= 50) return "NORMAL";
    return "SOBRESTOCK";
}

// Clasificar precio
function clasificarPrecio(precio) {
    if (precio < 5000) return "Económico";
    if (precio <= 20000) return "Moderado";
    return "Costoso";
}

// Clasificar tipo
function clasificarTipo(tipo) {
    switch (tipo) {
        case "generico": return "Medicamento genérico";
        case "original": return "Medicamento de marca";
        case "controlado": return "Medicamento controlado";
        default: return "Tipo desconocido";
    }
}

// Validar vencimiento
function estadoVencimiento(fecha) {
    let hoy = new Date();
    let vencimiento = new Date(fecha);
    return vencimiento < hoy ? "VENCIDO" : "VIGENTE";
}

//RENDERIZAR EN HTML

let contenedor = document.getElementById("contenedor");
let totalInventario = 0;

medicamentos.forEach((med) => {

    let estadoStock = clasificarStock(med.stock);
    let categoriaPrecio = clasificarPrecio(med.precio);
    let tipoMedicamento = clasificarTipo(med.tipo);
    let estadoFecha = estadoVencimiento(med.fechaVencimiento);

    let disponibilidad = med.stock > 0 ? "Disponible" : "Agotado";
    let venta = med.requiereReceta ? "Requiere receta médica" : "Venta libre";

    let proveedor = med.proveedor ?? "Proveedor no asignado";
    let laboratorioNombre = med.laboratorio?.nombre ?? "No disponible";
    let paisLab = med.laboratorio?.pais ?? "No disponible";

    let valorInventario = calcularValorInventario(med.stock, med.precio);
    totalInventario += valorInventario;

    //CLASES VISUALES
    let claseStock = med.stock <= 10 ? "critico" : "normal";
    let claseVencimiento = estadoFecha === "VENCIDO" ? "vencido" : "vigente";

    //ALERTAS VISUALES
    let alerta = "";

    if (med.stock === 0) {
        alerta = "Sin stock";
    } else if (med.stock <= 10) {
        alerta = "Stock bajo";
    }

    if (estadoFecha === "VENCIDO") {
        alerta += "<br>🚫 Medicamento vencido";
    }

    //CREAR T
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${med.nombre}</h3>

        <p><strong>Tipo:</strong> ${tipoMedicamento}</p>

        <p><strong>Stock:</strong> 
            <span class="${claseStock}">
                ${med.stock} (${estadoStock})
            </span>
        </p>

        <p><strong>Disponibilidad:</strong> ${disponibilidad}</p>
        <p><strong>Venta:</strong> ${venta}</p>

        <p><strong>Precio:</strong> $${med.precio} (${categoriaPrecio})</p>
        <p><strong>Valor inventario:</strong> $${valorInventario}</p>

        <p><strong>Estado:</strong> 
            <span class="${claseVencimiento}">
                ${estadoFecha}
            </span>
        </p>

        <p><strong>Proveedor:</strong> ${proveedor}</p>
        <p><strong>Laboratorio:</strong> ${laboratorioNombre}</p>
        <p><strong>País:</strong> ${paisLab}</p>

        <p class="estado">${alerta}</p>
    `;

    contenedor.appendChild(card);
});

//RESUMEN

document.getElementById("totalInventario").textContent =
    "Total inventario: $" + totalInventario;
