// ==========================================
// SISTEMA FARMACIA - USANDO BUCLES
// ==========================================

let medicamentos = [
    { nombre: "Acetaminofén", stock: 15, precio: 2500 },
    { nombre: "Ibuprofeno", stock: 5, precio: 3000 },
    { nombre: "Amoxicilina", stock: 0, precio: 12000 },
    { nombre: "Aspirina", stock: 30, precio: 4000 },
    { nombre: "Paracetamol", stock: 8, precio: 2000 }
];

// ==========================================
// 1. FOR CLÁSICO → recorrer inventario
// ==========================================

console.log("=== LISTA DE MEDICAMENTOS ===");

for (let i = 0; i < medicamentos.length; i++) {
    console.log(`${i + 1}. ${medicamentos[i].nombre}`);
}

// ==========================================
// 2. FOR OF → mostrar información completa
// ==========================================

console.log("\n=== DETALLE DE INVENTARIO ===");

for (let med of medicamentos) {
    console.log(`${med.nombre} - Stock: ${med.stock} - Precio: $${med.precio}`);
}

// ==========================================
// 3. WHILE → buscar medicamento
// ==========================================

let i = 0;
let encontrado = false;
let nombreBuscar = "Ibuprofeno";

while (i < medicamentos.length && !encontrado) {
    if (medicamentos[i].nombre === nombreBuscar) {
        console.log(`\n✅ Encontrado: ${medicamentos[i].nombre}`);
        encontrado = true;
    }
    i++;
}

if (!encontrado) {
    console.log("\n❌ Medicamento no encontrado");
}

// ==========================================
// 4. BREAK → detener si encuentra sin stock
// ==========================================

console.log("\n=== BUSCANDO SIN STOCK ===");

for (let med of medicamentos) {
    if (med.stock === 0) {
        console.log(`🚫 ${med.nombre} sin stock`);
        break;
    }
}

// ==========================================
// 5. CONTINUE → saltar medicamentos sin stock
// ==========================================

console.log("\n=== DISPONIBLES ===");

for (let med of medicamentos) {
    if (med.stock === 0) {
        continue;
    }

    console.log(`✔ ${med.nombre} disponible`);
}

// ==========================================
// 6. ACUMULADORES → valor total inventario
// ==========================================

let totalInventario = 0;

for (let med of medicamentos) {
    totalInventario += med.stock * med.precio;
}

console.log("\n💰 Total inventario: $" + totalInventario);

// ==========================================
// 7. EXTRA PRO → contar medicamentos críticos
// ==========================================

let criticos = 0;

for (let med of medicamentos) {
    if (med.stock <= 10 && med.stock > 0) {
        criticos++;
    }
}

console.log(`⚠️ Medicamentos con stock bajo: ${criticos}`);

// ==========================================
// 8. EXTRA PRO → encontrar el más caro
// ==========================================

let masCaro = medicamentos[0];

for (let med of medicamentos) {
    if (med.precio > masCaro.precio) {
        masCaro = med;
    }
}

console.log(`💎 Medicamento más caro: ${masCaro.nombre} ($${masCaro.precio})`);
