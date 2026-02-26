let usuarios = [];

class Usuario {

    constructor(nombre) {
        this.id = Date.now().toString();
        this.nombre = nombre;
    }

}

function crearUsuario() {

    const nombre = document.getElementById("nombreUsuario").value;

    const usuario = new Usuario(nombre);

    usuarios.push(usuario);

    renderUsuarios();

}

function renderUsuarios() {

    const container = document.getElementById("listaUsuarios");

    container.innerHTML = "";

    usuarios.forEach(usuario => {

        container.innerHTML += `
            <div>
                👤 ${usuario.nombre}
            </div>
        `;

    });

}
