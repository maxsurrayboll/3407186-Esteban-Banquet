# 💊 Sistema de Gestión de Farmacia - Uso de Bucles

## 📌 Descripción

Este módulo hace parte del desarrollo de un sistema de gestión de farmacia.  
Se implementan diferentes estructuras de repetición en JavaScript para simular procesos reales del manejo de inventario de medicamentos.

El objetivo es aplicar bucles para recorrer, analizar y manipular datos dentro del sistema.

---

## 🧠 Tecnologías utilizadas

- JavaScript
- Consola del navegador

---

## 🔁 Estructuras de repetición implementadas

### 🔹 1. Bucle `for`
Se utiliza para recorrer la lista de medicamentos mediante índices.

```js
for (let i = 0; i < medicamentos.length; i++) {
    console.log(medicamentos[i].nombre);
}


for (let med of medicamentos) {
    console.log(med.nombre);
}


while (i < medicamentos.length && !encontrado) {
    if (medicamentos[i].nombre === nombreBuscar) {
        encontrado = true;
    }
    i++;
}


for (let med of medicamentos) {
    if (med.stock === 0) {
        break;
    }
}


for (let med of medicamentos) {
    if (med.stock === 0) continue;
    console.log(med.nombre);
}



let totalInventario = 0;

for (let med of medicamentos) {
    totalInventario += med.stock * med.precio;
}


let criticos = 0;

for (let med of medicamentos) {
    if (med.stock <= 10 && med.stock > 0) {
        criticos++;
    }
}


let masCaro = medicamentos[0];

for (let med of medicamentos) {
    if (med.precio > masCaro.precio) {
        masCaro = med;
    }
}



---

# ✅ Cómo usarlo

1. Crea un archivo:


2. Pega ese contenido  
3. Súbelo o entrégalo en tu proyecto  