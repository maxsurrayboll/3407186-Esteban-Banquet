// ===============================
// DATOS DEL SISTEMA DE FARMACIA
// ===============================

const farmacia = {
    nombre: "Sistema de Gestión de Farmacias",
    titulo: "Administrador",
    ubicacion: "Bogotá, Colombia",
    bio: "Sistema encargado de gestionar medicamentos, ventas, inventario y clientes.",
    email: "farmacia@email.com",
    telefono: "+57 300 123 4567",
    avatar: "https://via.placeholder.com/150",
    habilidades: [
        "Gestión de Inventario",
        "Control de Medicamentos",
        "Ventas",
        "Reportes",
        "Gestión de Clientes"
    ],
    redes: [
        {
            nombre: "Facebook",
            url: "https://facebook.com"
        },
        {
            nombre: "Instagram",
            url: "https://instagram.com"
        },
        {
            nombre: "Twitter",
            url: "https://twitter.com"
        }
    ]
};


// ===============================
// CARGAR INFORMACION
// ===============================

document.getElementById("userName").textContent = farmacia.nombre;
document.getElementById("userTitle").textContent = farmacia.titulo;
document.getElementById("userLocation").textContent = farmacia.ubicacion;
document.getElementById("userBio").textContent = farmacia.bio;
document.getElementById("userEmail").textContent = farmacia.email;
document.getElementById("userPhone").textContent = farmacia.telefono;
document.getElementById("avatarImg").src = farmacia.avatar;

// MODO OSCURO
const botonTema = document.getElementById("themeToggle");

botonTema.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// FOTO DE PERFIL
// crear input dinamico
const inputFoto = document.createElement("input");

inputFoto.type = "file";
inputFoto.accept = "image/*";

document.body.appendChild(inputFoto);

const avatar = document.getElementById("avatarImg");

inputFoto.addEventListener("change", function () {

    const archivo = inputFoto.files[0];

    if (archivo) {

        const reader = new FileReader();

        reader.onload = function (e) {

            avatar.src = e.target.result;

        };

        reader.readAsDataURL(archivo);

    }

});

// REDES SOCIALES
const contenedorRedes = document.getElementById("socialLinks");

contenedorRedes.innerHTML = "";

farmacia.redes.forEach(function(red){

    const enlace = document.createElement("a");

    enlace.href = red.url;
    enlace.textContent = red.nombre;
    enlace.target = "_blank";

    contenedorRedes.appendChild(enlace);

});
