 const Producto = function (nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
    let producto1 = new Producto("Auriculares Redragon",20000,20)
    let producto2 = new Producto("Auriculares Audiotechnica",60000,10)
    let producto3 = new Producto("Teclado Redragon",15000,25)
    let producto4 = new Producto("Teclado Zowie",30000,20)
    let producto5 = new Producto("Mouse Logitech",15000,30)
    let producto6 = new Producto("Mouse inalambrico Logitech",20000,20)
    let producto7 = new Producto("Placa Video Nvidia 3200",80000,28)
    let producto8 = new Producto("Placa de Video AMD",60000,20)
    let producto9 = new Producto("Procesador Ryzen 5", 80000,10)
    let producto10 = new Producto("Procesador Ryzen 7",100000,10)

    let lista = [producto1, producto2, producto3, producto4,producto5,producto6,producto7,producto8,producto9,producto10]
//seccion de storage
    if(localStorage.getItem("productos")){
        lista = JSON.parse(localStorage.getItem("productos"))
    }else{
        lista = lista
    }

    // seccion de filtrado

    function filtrarProductos (){
        const body = document.querySelector("body")
        const input = document.getElementById("filtrado").value
        const valorIngresado = input.trim().toUpperCase() 
        const resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(valorIngresado)) 

        const contenedorExistente = document.querySelector(".estiloContenedor");
        if (contenedorExistente) {
        contenedorExistente.remove();
        }
        
        if(resultado.length > 0){
            const contenedor = document.createElement ("div")
            contenedor.classList.add("estiloContenedor")
            resultado.forEach((x)=>{
                    const card = document.createElement("div")
                    const nombre = document.createElement("p")
                    nombre.textContent = `producto: ${x.nombre}`
                    card.appendChild(nombre)
                    const precio = document.createElement("p")
                    precio.textContent = `precio: ${x.precio}`
                    card.appendChild(precio)
                    const stock = document.createElement("p")
                    stock.textContent = `en stock: ${x.stock}`
                    card.appendChild(stock)
                
                contenedor.appendChild(card)

            })

            body.appendChild(contenedor)

        }
        else{
            alert("no se encontro el producto")
        }
    }
        const botonFiltrar = document.getElementById("filtrar")
        botonFiltrar.classList.add("botoncitosBuscador")
        botonFiltrar.addEventListener("click",filtrarProductos)
        

        //seccion de agregar un producto

    function AgregarUnProducto(){
    const form =  document.createElement("form")
    form.classList.add("formularioNuevoProducto")  
    form.innerHTML=
    `<label for="producto-input">Producto:</label>
    <input id= "producto-input" type="text" step="0.01" required>
    
    <label for="precio-input">Precio:</label>
    <input id= "precio-input" type="number" step="0.01" required>

    <label for="stock-input">Stock:</label>
    <input id= "stock-input" type="number" step="0.01" required>

    <button type="submit">Agregar el producto</button> `
    
    form.addEventListener("submit", function(x){
        x.preventDefault();
        const productoInput = document.getElementById("producto-input").value.trim()
        const precioInput = parseFloat (document.getElementById("precio-input").value)
        const stockInput = parseInt (document.getElementById("stock-input").value)

        if (isNaN(stockInput) || isNaN(precioInput)  || productoInput === ""){
            alert("por favor ingresa valores validos.")
            return
            }
        const producto = new Producto (productoInput, precioInput, stockInput)

        if (lista.some((x)=>x.nombre === producto.nombre)){
            alert ("ya existe ese producto")
            return
        }

        lista.push(producto)

        localStorage.setItem("productos", JSON.stringify(lista))
        alert(`Agregaste el producto:${producto.nombre}`)

        const contenedorDos = document.createElement ("div")
        lista.forEach((x)=>{
            const card = document.createElement("div")

                    const nombre = document.createElement("p")
                    nombre.textContent = `producto: ${x.nombre}`
                    card.appendChild(nombre)

                    const precio = document.createElement("p")
                    precio.textContent = `precio: ${x.precio}`
                    card.appendChild(precio)

                    const stock = document.createElement("p")
                    stock.textContent = `en stock: ${x.stock}`
                    card.appendChild(stock)

                
                contenedorDos.appendChild(card)
            })

                const body = document.querySelector("body")
                body.appendChild(contenedorDos)
                form.reset()
        })
        
        
   
    const body = document.querySelector("body")
    body.appendChild(form)
}
    const BotonAgregar= document.getElementById("BotonAP")
    BotonAgregar.classList.add("botoncitosBuscador")
    BotonAgregar.addEventListener("click",AgregarUnProducto)
    