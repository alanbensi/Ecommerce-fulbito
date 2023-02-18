const contenedorProductos = document.getElementById("contenedorProductos")
const contadorCarrito = document.getElementById ("contadorCarrito"); 
const carritoOffcanvas = document.getElementById("carritoOffcanvas");
const contenedorContadorCarrito = document.getElementById("contenedorContadorCarrito");
const precioTotalCarrito = document.getElementById ("precioTotalCarrito");
const terminarCompra = document.getElementById ("terminarCompra");
const contador = document.createElement("p");



const camisetas = [ 
    {id:1, nombre: "Argentinos Juniors", imagen:"./imagenes/argentinos.jpg", precio: 8000, cantidad: 1},
    {id:2, nombre: "Banfield", imagen:"../imagenes/banfield.jpg", precio: 6000, cantidad: 1},
    {id:3, nombre: "Belgrano de Cordoba", imagen:"./imagenes/belgrano.jpg", precio: 6000, cantidad: 1},
    {id:4, nombre: "Boca Juniors", imagen:"./imagenes/boca.jpg", precio: 12000, cantidad: 1},
    {id:5, nombre: "Independiente", imagen:"./imagenes/independiente.jpg", precio: 9000, cantidad: 1},
    {id:6, nombre: "Lanus", imagen:"./imagenes/lanus.jpg", precio: 5000, cantidad: 1},
    {id:7, nombre: "Newells all Boys de Rosario", imagen:"./imagenes/newells.jpg", precio: 8000, cantidad: 1},
    {id:8, nombre: "Racing Club", imagen:"./imagenes/racing.jpg", precio: 9000, cantidad: 1},
    {id:9, nombre: "River Plate", imagen:"./imagenes/river.jpg", precio: 15000, cantidad: 1},
    {id:10, nombre: "Rosario Central", imagen:"./imagenes/rosario-central.jpg", precio: 8000, cantidad: 1},
    {id:11, nombre: "San Lorenzo de Almagro", imagen:"./imagenes/san-lorenzo.jpg", precio: 9000, cantidad: 1},
    {id:12, nombre: "Talleres de Cordoba", imagen:"./imagenes/talleres.jpg", precio: 7000, cantidad: 1}
]
const carritoDeCompras = [];


camisetas.forEach (item => {
    const div = document.createElement("div");
    div.innerHTML += 
    `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div class="flip-card-back">
                <h3 class="tituloCard">Camiseta ${item.nombre} 2023</h3>
                <p>PRECIO: $${item.precio}</p>
                <button id="camiseta${item.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`camiseta${item.id}`);
    botonAgregarCarrito.addEventListener ("click", ()=> {
        agregarAlCarrito(item.id, carritoDeCompras);
        agregarContadorCarrito();
        mostrarCarrito();
    })
})

const agregarAlCarrito = (productoSeleccionado, carrito)=> {
    const productoExiste = carritoDeCompras.some (camiseta => camiseta.id === productoSeleccionado);
    const productoElegido = camisetas.find (camiseta => camiseta.id === productoSeleccionado);
    if (productoExiste) {
        let precioInicial = productoElegido.precio;
        productoElegido.cantidad++;
        productoElegido.nuevoPrecio = productoElegido.cantidad * precioInicial;
    } else {
        carrito.push (productoElegido);
        console.log ("Agregado con exito");
        console.log (carrito);
    }
}

const agregarContadorCarrito = ()=> {
    if (carritoDeCompras.length !== 0) {
        contenedorContadorCarrito.appendChild(contador);
        contador.textContent = carritoDeCompras.length;
        contador.classList.add("contadorCarrito");
    } else {
        contador.textContent ="";
        contador.classList.remove ("contadorCarrito");
    }
}

const mostrarCarrito = ()=>{
    carritoOffcanvas.innerHTML="";
    carritoDeCompras.forEach (producto => {
        tr = document.createElement ("tr");
        tr.classList.add("tablaProductos");
        tr.innerHTML += 
        `
            <td>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </td>
            <td class="infoProducto">Camiseta ${producto.nombre}</td>
            <td class="infoProducto">${producto.cantidad}</td>
            <td class="infoProducto">${producto.precio}</td>
            <td class="infoProducto eliminarProducto">
                <iconify-icon icon="material-symbols:delete-outline" class="deleteIconify" id="eliminar${producto.id}"></iconify-icon>
            </td>
        `

        carritoOffcanvas.appendChild(tr)

        const botonEliminar = document.getElementById(`eliminar${producto.id}`);
        botonEliminar.addEventListener("click", ()=> {
            eliminarProducto(producto.id)
        })
    })
    const totalCarrito = carritoDeCompras.reduce ((acumulador,producto) => acumulador + producto.precio,0);
    precioTotalCarrito.innerText =`Precio total: $${totalCarrito}`;
}


const eliminarProducto = (productoClickeado) => {
    const productoEliminado = carritoDeCompras.find (camiseta =>camiseta.id === productoClickeado);
    const index = carritoDeCompras.indexOf (productoEliminado);
    carritoDeCompras.splice (index,1);
    agregarContadorCarrito();
    mostrarCarrito();
}

const vaciarCarrito = ()=> {
    carritoDeCompras.innerHTML =[];
    carritoOffcanvas.innerHTML =[];
    contador.textContent ="";
    contador.classList.remove ("contadorCarrito");
}

terminarCompra.addEventListener ("click", ()=> {
    vaciarCarrito();
})

