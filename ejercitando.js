

let carrito = []




class articulo {
  constructor(nombre, detalle, precio,) {

    this.nombre = nombre
    this.detalle = detalle
    this.precio = precio
  }

}

const articulo1 = new articulo('pelota de yoga', 'pelota hecha de silicona resistente', 5500)
const articulo2 = new articulo('mancuerna', 'mancuerna de hierro cromada de 1kg', 1500)
const articulo3 = new articulo('banda elasticas gim', 'exelnte elasticidad hasta 2.5m', 1800)
const articulo4 = new articulo('cinta caminadora', 'cinta caminadora hasta 120kg', 45000)
const articulo5 = new articulo('bicicleta fija ', 'estructura de hierro cromada con regulador ', 35000)
const articulo6 = new articulo('alfombra De GIM', 'material refiorzado antitraspirante en varios colores ', 2500)

const mostrarMensaje = (articulo) => {
  console.log('ELEJISTE  EL SIGUIENTE ARTICULO : ' + articulo.nombre + ' DESCRIPCION: ' + articulo.detalle + ' PRECIO : $' + articulo.precio)

}


const totalCarrito = () => {
  let sumaTotal = 0
  carrito.forEach((articulo) => {


    sumaTotal += articulo.precio

  })
  return sumaTotal
}

alert('BIENVENIDOS A FITNESS-X ////  LE MOSTRAREMOS LOS PROCUCTOS QUE TENEMOS HOY PARA OFRECERLE')

const agregarProducto = () => {

  let opcion = Number((prompt('INDIQUE QUE DESEA COMPRAR:   \n 1 . PELOTA DE YOGA $ 5500\n 2. MANCUERNAS DE MANO $1500 : $1000 \n 3 . BANDA ELASTICA $1800 \n 4. CINTA CAMINADORA $45000 \n 6. ALFOMBRA DE GIM $ 2500  ')))

  switch (opcion) {

    case 1:
      mostrarMensaje(articulo1)
      break;
    case 2:
      mostrarMensaje(articulo2)
      carrito.push(articulo2)
      break;
    case 3:
      mostrarMensaje(articulo3)
      carrito.push(articulo3)

      break;
    case 4:
      mostrarMensaje(articulo4)
      carrito.push(articulo4)
      break;
    case 5:
      mostrarMensaje(articulo5)
      carrito.push(articulo5)
      break;
    case 6:
      mostrarMensaje(articulo6)
      carrito.push(articulo6)

      break;
    case 7:
    default:
      alert('INGRESE UNA OPCION CORRECTA')
      break
  }

  if (confirm('DESEA AGREGAR OTRO PRODUCTO ?')) {

    agregarProducto()

  } else {
    alert('COMPRA FINALIZADA  EL TOTAL A PAGAR ES DE $ ' + sumaTotal )

    console.log(carrito)
  }
}
agregarProducto()







