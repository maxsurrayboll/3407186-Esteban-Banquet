# 📌 Semana 3 – Desarrollo de Funcionalidades Dinámicas  
## Proyecto: Sistema de Gestión de Farmacia

---

## 🎯 Objetivo de la Semana

Desarrollar la lógica dinámica del sistema utilizando JavaScript, permitiendo la interacción del usuario con la aplicación, el registro de medicamentos y la visualización por categorías.

---

## 🧩 Funcionalidades Implementadas

### 1️⃣ Registro dinámico de medicamentos

Se implementó un formulario que permite:

- Ingresar nombre del medicamento
- Tipo o categoría
- Precio
- Cantidad disponible

Al enviar el formulario:

- Se valida que los campos no estén vacíos.
- Se agrega el medicamento a una lista interna (array en JavaScript).
- Se actualiza automáticamente la vista en pantalla.

---

### 2️⃣ Filtro por categoría

Se desarrolló un sistema que:

- Agrupa medicamentos por tipo.
- Permite que al seleccionar una categoría solo se muestren los medicamentos correspondientes.
- Actualiza dinámicamente el contenido sin necesidad de recargar la página.

---

### 3️⃣ Renderizado dinámico en pantalla

Se utilizó:

- document.getElementById()
- addEventListener()
- innerHTML
- Funciones personalizadas para renderizar listas

Esto permitió que los medicamentos agregados se muestren inmediatamente en la interfaz.

---

### 4️⃣ Navegación entre vistas

Se configuró el sistema para que:

- Cada sección (Medicamentos, Usuarios, Transacciones, Estadísticas) se visualice en páginas separadas.
- Se mantenga coherencia visual en todas las vistas.
- La navegación se realice mediante botones o enlaces del menú principal.

---

## 🛠 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Manipulación del DOM
- Uso de arrays para almacenamiento temporal

---

## 🧠 Aprendizajes de la Semana

Durante esta semana se reforzaron conceptos como:

- Manejo de eventos en JavaScript.
- Manipulación dinámica del DOM.
- Validación básica de formularios.
- Organización del código en funciones.
- Separación de estructura (HTML), estilo (CSS) y lógica (JS).

---

## ⚠ Problemas Encontrados

- Los medicamentos no aparecían en pantalla.
- Errores en la vinculación del archivo script.js.
- Categorías nuevas que no se mostraban correctamente.
- Fallos en el renderizado al no actualizar la lista después de agregar datos.

---

## ✅ Soluciones Aplicadas

- Verificación correcta de los id en el HTML.
- Confirmación del enlace correcto del archivo JavaScript.
- Reorganización del código en funciones reutilizables.
- Creación de una función renderMedicamentos() ejecutada después de cada modificación del array.

---

## 📈 Resultado Final

Al finalizar la Semana 3:

✔ Se pueden agregar medicamentos dinámicamente.  
✔ Se pueden visualizar por categoría.  
✔ La navegación entre páginas funciona correctamente.  
✔ La interfaz mantiene un diseño coherente tipo farmacia.  
✔ El sistema es dinámico y funcional.

---

## 🔜 Próximos Pasos (Semana 4)

- Implementar almacenamiento con LocalStorage.
- Mejorar validaciones de entrada.
- Agregar módulo de estadísticas con gráficos.
- Integrar usuarios y transacciones con la lógica principal.

---
