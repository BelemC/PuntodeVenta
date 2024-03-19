
/*//PRODUCTOS

const productos = [

    //Pasteles

    {
        id: "Vintage-1",
        titulo: "Vintage 01",
        imagen:"./img/pastelfb2.jpg",
        categoria:{
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    },

    {
        id: "Vintage-2",
        titulo: "vintage 02",
        imagen:"./img/pastelfb8.jpeg",
        categoria:{
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 

    {
        id: "Vintage",
        titulo: "",
        imagen: "./img/pastelfb6.jpg",
        categoria:{
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 

    {
        id: "Vintage",
        titulo: "",
        imagen:"./img/pastelfb7.jpeg",
        categoria:{
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 

    //Cupcakes

    {
        id: "Cup-cakes",
        titulo: "",
        imagen:"./img/cupcakefb1.jpg",
        categoria:{
            nombre: "Cup-cakes",
            id: "cup-cakes"
        },
        precio: 299
    }, 

    //Personalizados

    {
        id: "Pasteles-personalizados",
        titulo: "",
        imagen:"./img/pastelfb3.jpg",
        categoria:{
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 

    {
        id: "Pasteles-personalizados",
        titulo: "",
        imagen:"./img/pastelfb4.jpg",
        categoria:{
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 

    {
        id: "Pasteles-personalizados",
        titulo: "",
        imagen:"./img/pastelfb5.jpeg",
        categoria:{
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 

    {
        id: "Pasteles-personalizados",
        titulo: "",
        imagen:"./img/pastelfb8.jpeg",
        categoria:{
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {

            const productoCategoria = productos.find(producto => productoCategoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
 
             const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
             cargarProductos(productosBoton);
         } else {
             tituloPrincipal.innerText = "Todos los productos";
             cargarProductos(productos);
         }
         
     })
     
    }); */


    //PRODUCTOS
const productos = [
    //Pasteles
    {
        id: "Vintage-1",
        titulo: "Vintage 01",
        imagen: "pastelfb2.jpg",
        categoria: {
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    },
    {
        id: "Vintage-2",
        titulo: "vintage 02",
        imagen: "pastelfb8.jpeg",
        categoria: {
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 
    {
        id: "Vintage-3",
        titulo: "Vintage 03",
        imagen: "pastelfb6.jpg",
        categoria: {
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 
    {
        id: "Vintage-4",
        titulo: "Vintage 04",
        imagen: "pastelfb7.jpeg",
        categoria: {
            nombre: "Vintage",
            id: "vintage"
        },
        precio: 299
    }, 
    //Cupcakes
    {
        id: "Cup-cakes",
        titulo: "Cupcake 01",
        imagen: "cupcakefb1.jpg",
        categoria: {
            nombre: "Cup-cakes",
            id: "cup-cakes"
        },
        precio: 299
    }, 
    //Personalizados
    {
        id: "Personalizados-1",
        titulo: "Personalizado 01",
        imagen: "pastelfb3.jpg",
        categoria: {
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 
    {
        id: "Personalizados-2",
        titulo: "Personalizado 02",
        imagen: "pastelfb4.jpg",
        categoria: {
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 
    {
        id: "Personalizados-3",
        titulo: "Personalizado 03",
        imagen: "pastelfb5.jpeg",
        categoria: {
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }, 
    {
        id: "Personalizados-4",
        titulo: "Personalizado 04",
        imagen: "pastelfb8.jpeg",
        categoria: {
            nombre: "Personalizados",
            id: "personalizados"
        },
        precio: 299
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="./img/${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.appendChild(div);
    })

    actualizarbotonesAgregar();
    
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }

        tituloPrincipal.innerText = e.currentTarget.innerText;
    });
}); 



function actualizarbotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlcarrito);
    });
}

let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlcarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id ===idBoton)){
       const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
       productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    } 

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText =nuevoNumerito;
}
