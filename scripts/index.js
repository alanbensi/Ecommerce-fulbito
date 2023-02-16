const contenedorProductos = document.getElementById("contenedorProductos")


const camisetas = [ 
    {id:1, nombre: "Argentinos Juniors", imagen:"./imagenes/argentinos.jpg", precio: 8000, cantidad: 1},
    {id:2, nombre: "Banfield", imagen:"./imagenes/banfield.jpg", precio: 6000, cantidad: 1},
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

camisetas.forEach (item => {
    contenedorProductos.innerHTML += 
    `
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            <p>PRECIO: $ ${item.precio}</p>
            <button class="btn btn-primary" id="camiseta${item.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `
})