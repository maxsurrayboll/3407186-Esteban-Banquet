// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// DOMINIO: Sistema de Gestión de Farmacias
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "Sistema de Gestión de Farmacias";

// Entidad del sistema → medicamento en inventario
const rawEntityName = "  Ibuprofeno 400mg  ";

const entityCategory = "Medicamento - Antiinflamatorio";

const entityCode = "MED-002";

const entityDescription = "Medicamento utilizado para reducir inflamación, fiebre y dolor en pacientes.";

const mainValue = 8000; // precio

const isActive = true; // disponible en inventario


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = entityCode.startsWith("MED");

const descriptionIsRelevant = entityDescription.includes("fiebre");

const hasValidSuffix = entityCode.endsWith("002");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
 ${DOMAIN_NAME.toUpperCase()} — REGISTRO DE INVENTARIO
${separator}
Nombre:        ${entityNameUpper}
Tipo:          ${entityCategory}
Código:        ${entityCode}
Prefijo:       ${codePrefix}
Precio:        $${mainValue}
Disponibilidad:${isActive ? "En stock" : "Agotado"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones del Sistema ---");

console.log(`✔ Código válido (prefijo MED): ${hasValidPrefix}`);
console.log(`✔ Descripción relevante (fiebre): ${descriptionIsRelevant}`);
console.log(`✔ Código válido (terminación 002): ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación del Sistema ---");

const notification = `📢 Nuevo medicamento en inventario: ${entityName} (${entityCode})`;

console.log(notification);
console.log("");
