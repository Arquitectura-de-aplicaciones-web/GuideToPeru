module.exports = function () {
  var data = {
    Destinos: [
      {
        id: 1,
        nombreDestino: "Destino 1",
        historia: "historia... 1"
      },
      {
        id: 2,
        nombreDestino: "Destino 2",
        historia: "historia... 2"
      },
      {
        id: 3,
        nombreDestino: "Destino 3",
        historia: "historia... 3"
      }
    ],

    clientes: [],
    Negocio: [
      {
        id: 1,
        nameNegocio: "Fast Market",
        direccionNegocio: "Av Jose Galvez #1345",
        telefono: "5687943654",
        emailNegocio: "fastmark@gmail.com",
        tipoNegocio: "Productos primera necesidad",
        IDusuario: "0",
      },
      {
        id: 2,
        nameNegocio: "Tiendas Mass",
        direccionNegocio: "Av Nicolas Ayllon #1534",
        telefono: "3467890126",
        emailNegocio: "tiendmass@gmail.com",
        tipoNegocio: "Comidas Pre_peradas",
        IDusuario: "0",
      },
      {
        id: 3,
        nameNegocio: "La Union",
        direccionNegocio: "Av Ricardo Palma #4365",
        telefono: "5753698425",
        emailNegocio: "launion@gmail.com",
        tipoNegocio: "Venta de Productos Integrales",
        IDusuario: "0",
      },
      {
        id: 4,
        nameNegocio: "Papas King",
        direccionNegocio: "Av Primavera #1143",
        telefono: "4673598124",
        emailNegocio: "papaskin@gmail.com",
        tipoNegocio: "Venta de comida rapida",
        IDusuario: "0",
      },
      {
        id: 5,
        nameNegocio: "Toro Mata",
        direccionNegocio: "Av Tomas Valle #4314",
        telefono: "4675832198",
        emailNegocio: "toromata@gmail.com",
        tipoNegocio: "Venta de Productos",
        IDusuario: "0",
      },
    ],
    
    Compras: [
      {
        id:1,
        cantidad: "1",
        precio_total: "$2.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-24",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:2,
        cantidad: "3",
        precio_total: "$6.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-09-10",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:3,
        cantidad: "7",
        precio_total: "$14.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-08-23",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:4,
        cantidad: "9",
        precio_total: "$18.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-10-27",
        Cliente_ID:"0",
        Negocio_ID:"0",
      },
      {
        id:5,
        cantidad: "12",
        precio_total: "$24.00",
        descripcion:"Compra de un producto x",
        fecha:"2022-06-12",
        Cliente_ID:"0",
        Negocio_ID:"0",
      }

    ],

  }
  return data
}
