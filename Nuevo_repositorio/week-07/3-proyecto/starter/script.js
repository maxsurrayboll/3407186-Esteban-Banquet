// ==========================================
// SISTEMA DE FARMACIA - FUNCIONES
// ==========================================

// ===== DATOS =====
let medicamentos = [
    { nombre: "Acetaminofén", stock: 15, precio: 2500 },
    { nombre: "Ibuprofeno", stock: 5, precio: 3000 },
    { nombre: "Amoxicilina", stock: 0, precio: 12000 },
    { nombre: "Aspirina", stock: 30, precio: 4000 }
];

// ==========================================
// FUNCIONES
// ==========================================

// 1. Calcular valor por medicamento
function calcularValorInventario(stock, precio) {
    return stock * precio;
}

// 2. Clasificar stock
function clasificarStock(stock) {
    if (stock <= 0) return "SIN STOCK";
    if (stock <= 10) return "CRÍTICO";
    if (stock <= 50) return "NORMAL";
    return "SOBRESTOCK";
}

// 3. Buscar medicamento
function buscarMedicamento(nombre, lista) {
    return lista.find(med => med.nombre === nombre);
}

// 4. Obtener disponibles
function obtenerDisponibles(lista) {
    return lista.filter(med => med.stock > 0);
}

// 5. Calcular total inventario
function calcularTotalInventario(lista) {
    let total = 0;

    for (let med of lista) {
        total += med.stock * med.precio;
    }

    return total;
}

// 6. Vender medicamento
function venderMedicamento(nombre, lista) {
    let med = lista.find(m => m.nombre === nombre);

    if (!med) {
        return "❌ Medicamento no existe";
    }

    if (med.stock <= 0) {
        return "🚫 Sin stock";
    }

    med.stock--;
    return "✅ Venta realizada";
}

// ==========================================
// PRUEBAS (SIMULACIÓN DEL SISTEMA)
// ==========================================

console.log("=== LISTA DE MEDICAMENTOS ===");

medicamentos.forEach(med => {
    console.log(`${med.nombre} - Stock: ${med.stock} - Precio: $${med.precio}`);
});

// Buscar medicamento
console.log("\n=== BUSCAR MEDICAMENTO ===");
let buscado = buscarMedicamento("Ibuprofeno", medicamentos);
console.log(buscado);

// Mostrar disponibles
console.log("\n=== DISPONIBLES ===");
let disponibles = obtenerDisponibles(medicamentos);

disponibles.forEach(med => {
    console.log(`✔ ${med.nombre}`);
});

// Calcular total inventario
console.log("\n=== TOTAL INVENTARIO ===");
let total = calcularTotalInventario(medicamentos);
console.log(`💰 Total: $${total}`);

// Clasificación de stock
console.log("\n=== ESTADO DE STOCK ===");

medicamentos.forEach(med => {
    console.log(`${med.nombre}: ${clasificarStock(med.stock)}`);
});

// Simular venta
console.log("\n=== VENTA ===");

console.log(venderMedicamento("Ibuprofeno", medicamentos));
console.log(venderMedicamento("Amoxicilina", medicamentos));
console.log(venderMedicamento("MedicamentoX", medicamentos));

// Ver inventario actualizado
console.log("\n=== INVENTARIO ACTUALIZADO ===");

medicamentos.forEach(med => {
    let valor = calcularValorInventario(med.stock, med.precio);

    console.log(`
${med.nombre}
Stock: ${med.stock}
Valor: $${valor}
`);
});
