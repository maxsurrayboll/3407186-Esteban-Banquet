// 💊 Sistema de gestión de farmacia

// Precio de medicamentos
let priceParacetamol = 5_000;
let priceIbuprofen = 8_000;

// Cantidades compradas
let qtyParacetamol = 3;
let qtyIbuprofen = 2;

// 🧮 1. Operaciones aritméticas
let totalParacetamol = priceParacetamol * qtyParacetamol;
let totalIbuprofen = priceIbuprofen * qtyIbuprofen;

// Suma total de la compra
let totalPurchase = totalParacetamol + totalIbuprofen;

console.log("Total compra:", totalPurchase);

// 💸 2. Descuento
let discount = 0;

if (totalPurchase >= 30_000) {
    discount = totalPurchase * 0.1; // 10%
}

let finalTotal = totalPurchase - discount;

console.log("Descuento aplicado:", discount);
console.log("Total a pagar:", finalTotal);

// 📦 3. Inventario (asignación compuesta)
let stockParacetamol = 10;

stockParacetamol -= qtyParacetamol; // se reduce el stock

console.log("Stock restante Paracetamol:", stockParacetamol);

// 🔍 4. Comparación estricta
let isStockEmpty = stockParacetamol === 0;

console.log("¿Producto agotado?:", isStockEmpty);

// 🔗 5. Operadores lógicos
let hasDiscount = totalPurchase >= 30_000;
let hasStock = stockParacetamol > 0;

let canSell = hasDiscount && hasStock;

console.log("¿Se puede vender con descuento y stock?:", canSell);
