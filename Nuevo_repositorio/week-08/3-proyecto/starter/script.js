// ==========================================
// SISTEMA FARMACIA - MÉTODOS DE ARRAYS
// ==========================================

let medicamentos = [
    { nombre: "Acetaminofén", stock: 15, precio: 2500 },
    { nombre: "Ibuprofeno", stock: 5, precio: 3000 },
    { nombre: "Amoxicilina", stock: 0, precio: 12000 },
    { nombre: "Aspirina", stock: 30, precio: 4000 }
];

// ==========================================
// 1. MAP → transformar datos
// ==========================================

let nombres = medicamentos.map(med => med.nombre);
console.log("Nombres:", nombres);

// ==========================================
// 2. FILTER → medicamentos disponibles
// ==========================================

let disponibles = medicamentos.filter(med => med.stock > 0);

console.log("\nDisponibles:");
disponibles.forEach(med => {
    console.log(`✔ ${med.nombre}`);
});

// ==========================================
// 3. REDUCE → total inventario
// ==========================================

let totalInventario = medicamentos.reduce((acc, med) => {
    return acc + (med.stock * med.precio);
}, 0);

console.log("\n💰 Total inventario:", totalInventario);

// ==========================================
// 4. FIND → buscar medicamento
// ==========================================

let buscado = medicamentos.find(m => m.nombre === "Ibuprofeno");

console.log("\n🔍 Medicamento encontrado:", buscado);

// ==========================================
// 5. SOME → verificar si hay sin stock
// ==========================================

let haySinStock = medicamentos.some(med => med.stock === 0);

console.log("\n🚫 ¿Hay medicamentos sin stock?", haySinStock);

// ==========================================
// 6. EVERY → verificar si todos tienen stock
// ==========================================

let todosDisponibles = medicamentos.every(med => med.stock > 0);

console.log("\n✅ ¿Todos tienen stock?", todosDisponibles);

// ==========================================
// 7. EXTRA PRO → medicamentos con valor total
// ==========================================

let inventarioDetallado = medicamentos.map(med => {
    return {
        nombre: med.nombre,
        valorTotal: med.stock * med.precio
    };
});

console.log("\n📊 Inventario detallado:");
console.log(inventarioDetallado);

// ==========================================
// 8. EXTRA PRO → top medicamento más caro
// ==========================================

let masCaro = medicamentos.reduce((max, med) => {
    return med.precio > max.precio ? med : max;
});

console.log(`\n💎 Más caro: ${masCaro.nombre} ($${masCaro.precio})`);