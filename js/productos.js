const stockProductos = [
    {
        id: 1,
        nombre: "Remera",
        desc: "Remera negra lisa básica",
        cantidad: 1,
        precio: 1200,
        img: "../assets/tshirt.jpg"
    },
    {
        id: 2,
        nombre: "Pantalón",
        desc: "Pantalón negro básico",
        cantidad: 1,
        precio: 1500,
        img: "../assets/pants.png"
    },
    {
        id: 3,
        nombre: "Campera",
        desc: "Campera negra básica",
        cantidad: 1,
        precio: 1700,
        img: "../assets/campera.png"
    },
    {
        id: 4,
        nombre: "Buzo",
        desc: "Buzo sin estampa básico",
        cantidad: 1,
        precio: 1700,
        img: "../assets/buzo.webp"
    }
];

let carrito = [];
const contenedor = document.querySelector("#cardContainer");

stockProductos.forEach((prod) => {
    const {id, nombre, desc, cantidad, precio, img} = prod;
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top m-2" alt="...">
    <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${desc}</p>
            <p class="card-text">$${precio}</p>
            <button onclick="agregarProducto(${id})" class="btn btn-danger">Añadir al carrito</button>
            </div>
            </div>
            `
})

function agregarProducto(id) {
    const item = stockProductos.find((prod) => prod.id === id);
    carrito.push(item);
    console.log(id)
    mostrarCarrito();
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}

let numero = 0;
const cartValue = document.getElementById("cart-value");
function mostrarCarrito() {
    numero++;
    localStorage.setItem("Numero", numero);
    cartValue.innerHTML = numero;
}

// CART
const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stockProductos);
        }, 2000);
    })
}

let producto = localStorage.getItem("Carrito");

function mostrarProductos(array) {
    array.forEach(item => {
        const li = document.querySelector("#lista-productos");
        li.id = item.id;
        li.textContent = `
        
        `
    });
}