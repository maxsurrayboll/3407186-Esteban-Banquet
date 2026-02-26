let ventas = [];

class Venta {

    constructor(producto, precio) {

        this.id = Date.now().toString();
        this.producto = producto;
        this.precio = precio;

    }

}

function crearVenta() {

    const producto = document.getElementById("producto").value;
    const precio = document.getElementById("precio").value;

    const venta = new Venta(producto, precio);

    ventas.push(venta);

    renderVentas();

}

function renderVentas() {

    const container = document.getElementById("listaVentas");

    container.innerHTML = "";

    ventas.forEach(venta => {

        container.innerHTML += `
            <div>
                💊 ${venta.producto} - $${venta.precio}
            </div>
        `;

    });

}
