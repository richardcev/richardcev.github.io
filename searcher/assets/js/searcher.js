

const loadProducts= () =>{
    let URL= "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json"
    fetch(URL)
    .then(response => response.json())
    .then(result => {
        result.map(producto => {
            let src= producto.src
            let name= producto.name
            let type= producto.type
            let price= producto.price
            document.getElementsByClassName("productos")[0].innerHTML+= 
            `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4 producto">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm tipo">${type}</p>
                  <a href="javascript:;">
                    <h5 class="nombre">
                      ${name}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                  </p>
                </div>
              </div>
            </div>`
        })

    })
    .catch(error =>{
        console.log(error)
    })



    let URL2= "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml"
    fetch(URL2)
    .then(response => response.text())
    .then(result => {
        let xml = (new DOMParser()).parseFromString(result, 'application/xml');
        let nombres= xml.getElementsByTagName("name")
        let precios= xml.getElementsByTagName("price")
        let sources= xml.getElementsByTagName("src")
        let types= xml.getElementsByTagName("type")
        let productos= xml.getElementsByTagName("product")
        for(let i = 0 ; i <productos.length; i++){
            let src= sources[i].innerHTML
            let name= nombres[i].innerHTML
            let type= types[i].innerHTML
            let price= precios[i].innerHTML
            document.getElementsByClassName("productos")[0].innerHTML+= 
            `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4 producto">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm tipo">${type}</p>
                  <a href="javascript:;">
                    <h5 class="nombre">
                      ${name}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                  </p>
                </div>
              </div>
            </div>
            `
            

        }
    })
    .catch(error => console.log(error))
}


const cargar= () =>{
    let boton= document.getElementById("filter")
    boton.addEventListener('click', event =>{
        let texto= document.getElementById("text")
        let valor= texto.value.toLowerCase()
        let productos= document.getElementsByClassName("producto")
        let nombreProductos= document.getElementsByClassName("nombre")
        let tipoProductos= document.getElementsByClassName("tipo")
        for(let i =0 ; i<nombreProductos.length ; i++){
            console.log(nombreProductos[i].innerHTML.toLowerCase())
            if(nombreProductos[i].innerHTML.toLowerCase().includes(valor) || 
            tipoProductos[i].innerHTML.toLowerCase().includes(valor) ){
              productos[i].style.display= "block"
            }
            else{
              productos[i].style.display= "none"
            }
        }
    })
}

loadProducts()

cargar()