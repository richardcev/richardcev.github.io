const runcScripts = () =>{
    let chart_bars= document.getElementById("chart-bars")
    console.log( chart_bars )
    let icons= document.getElementsByTagName("i")
    console.log(icons)
    let cards= document.getElementsByClassName("card")
    console.log(cards)
}

const modifyTest= () =>{
    let listOfP= document.getElementsByTagName( "p" )
    let elementP= listOfP[3]
    elementP.innerHTML= "Dinero actual"
    let listOfH4= document.getElementsByTagName( "h4" )
    let elementH4= listOfH4[0]
    elementH4.innerHTML= '$301k'
}

const updateData = () =>{
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];
    let [ users, clients, sales ] = data;
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales
    console.log(data)

     
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
  let listOfElements = document.getElementsByClassName('text-end pt-1')
  let [ , second, third, fourth ] = listOfElements;
  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;
}


const porcentajeCambio = () =>{
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]
      let [first, second, third, fourth]= cambios
    
    let { valor_previo: valor_previo1 , valor_actual: valor_actual1, mensaje_tiempo: mensaje1 } = first;
    let { valor_previo: valor_previo2 , valor_actual: valor_actual2, mensaje_tiempo: mensaje2 } = second;
    let { valor_previo: valor_previo3 , valor_actual: valor_actual3, mensaje_tiempo: mensaje3 } = third;
    let { valor_previo: valor_previo4 , valor_actual: valor_actual4, mensaje_tiempo: mensaje4 } = fourth;

    let porcentaje_de_cambio1= (valor_actual1 - valor_previo1)*100/valor_previo1
    let porcentaje_de_cambio2= Math.round(((valor_actual2 - valor_previo2)*100/valor_previo2)*100)/100
    let porcentaje_de_cambio3= Math.round(((valor_actual3 - valor_previo3)*100/valor_previo3)*100)/100
    let porcentaje_de_cambio4= Math.round(((valor_actual4 - valor_previo4)*100/valor_previo4)*100)/100

    let clase_cambio1;
    let clase_cambio2;
    let clase_cambio3;
    let clase_cambio4;

    porcentaje_de_cambio1 > 0 ? clase_cambio1="text-success" : clase_cambio1= "text-danger"
    porcentaje_de_cambio2 > 0 ? clase_cambio2="text-success" : clase_cambio2= "text-danger"
    porcentaje_de_cambio3 > 0 ? clase_cambio3="text-success" : clase_cambio3= "text-danger"
    porcentaje_de_cambio4 > 0 ? clase_cambio4="text-success" : clase_cambio4= "text-danger"


    let listcambios= document.getElementsByClassName("card-footer p-3")
    let primercambio= `<p class="mb-0"><span class="text-sm ${clase_cambio1} font-weight-bolder"> ${porcentaje_de_cambio1} </span> ${mensaje1} </p>`
    
    let segundocambio= 
    `<p class="mb-0"><span class="text-sm ${clase_cambio2} font-weight-bolder"> ${porcentaje_de_cambio2} </span> ${mensaje3} </p>`
    let tercercambio= 
    `<p class="mb-0"><span class="text-sm ${clase_cambio3} font-weight-bolder"> ${porcentaje_de_cambio3} </span> ${mensaje4} </p>`
    let cuartocambio= 
    `<p class="mb-0"><span class="text-sm ${clase_cambio4} font-weight-bolder"> ${porcentaje_de_cambio4} </span> ${mensaje4} </p>`

    let [ primero, segundo, tercero, cuarto ] = listcambios;
    primero.innerHTML = primercambio
    segundo.innerHTML = segundocambio
    tercero.innerHTML = tercercambio
    cuarto.innerHTML = cuartocambio
  
    console.log(listcambios)
}

runcScripts()
modifyTest()
updateData()
porcentajeCambio()