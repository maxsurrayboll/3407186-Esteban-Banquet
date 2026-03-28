# 💊 Sistema de Gestión de Farmacia - Funciones y Modularización

## 📌 Descripción

En esta fase del desarrollo se implementan funciones en JavaScript para estructurar y reutilizar la lógica del sistema de gestión de farmacia.

El objetivo es mejorar la organización del código, permitiendo que las operaciones del sistema sean más eficientes, reutilizables y escalables.

---

## 🧠 Tecnologías utilizadas

- JavaScript
- Funciones
- Arrays
- Lógica de programación

---

## ⚙️ Funciones implementadas

### 🔹 1. Función para calcular el valor del inventario

Permite obtener el valor total de cada medicamento según su stock y precio.

```js
function calcularValorInventario(stock, precio) {
    return stock * precio;
}


function clasificarStock(stock) {
    if (stock <= 0) return "SIN STOCK";
    if (stock <= 10) return "CRÍTICO";
    if (stock <= 50) return "NORMAL";
    return "SOBRESTOCK";
}


function buscarMedicamento(nombre, lista) {
    return lista.find(med => med.nombre === nombre);
}


function obtenerDisponibles(lista) {
    return lista.filter(med => med.stock > 0);
}


function calcularTotalInventario(lista) {
    let total = 0;

    for (let med of lista) {
        total += med.stock * med.precio;
    }

    return total;
}


function venderMedicamento(nombre, lista) {
    let med = lista.find(m => m.nombre === nombre);

    if (!med) return "No existe";
    if (med.stock <= 0) return "Sin stock";

    med.stock--;
    return "Venta realizada";
}


