function getRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export const materiales = [
  {
    id: getRandomId(),
    nombre: "Arena gruesa",
    unidad: "m3",
    precio: 35.0,
    cantidad: 10,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Grava",
    unidad: "m3",
    precio: 40.0,
    cantidad: 8,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Cemento Portland",
    unidad: "bolsa",
    precio: 8.5,
    cantidad: 50,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Ladrillo común",
    unidad: "millar",
    precio: 120.0,
    cantidad: 2,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Bloque de concreto",
    unidad: "c/u",
    precio: 1.2,
    cantidad: 300,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Cal hidratada",
    unidad: "bolsa",
    precio: 7.0,
    cantidad: 20,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Piedra triturada",
    unidad: "m3",
    precio: 38.0,
    cantidad: 5,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Varilla de acero 3/8\"",
    unidad: "barra",
    precio: 6.0,
    cantidad: 100,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Malla electrosoldada",
    unidad: "rollo",
    precio: 55.0,
    cantidad: 4,
    categoria: "Construcción"
  },
  {
    id: getRandomId(),
    nombre: "Tubo PVC 1/2\"",
    unidad: "tramo",
    precio: 2.5,
    cantidad: 40,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Codo PVC 1/2\"",
    unidad: "c/u",
    precio: 0.35,
    cantidad: 60,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Tee PVC 1/2\"",
    unidad: "c/u",
    precio: 0.45,
    cantidad: 40,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Válvula de esfera 1/2\"",
    unidad: "c/u",
    precio: 3.5,
    cantidad: 15,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Llave de paso 1/2\"",
    unidad: "c/u",
    precio: 2.8,
    cantidad: 20,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Tubo cobre 1/2\"",
    unidad: "tramo",
    precio: 12.0,
    cantidad: 10,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Codo cobre 1/2\"",
    unidad: "c/u",
    precio: 1.1,
    cantidad: 25,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Teflón",
    unidad: "rollo",
    precio: 0.75,
    cantidad: 30,
    categoria: "Plomería"
  },
  {
    id: getRandomId(),
    nombre: "Interruptor sencillo",
    unidad: "c/u",
    precio: 1.2,
    cantidad: 25,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Tomacorriente doble",
    unidad: "c/u",
    precio: 2.0,
    cantidad: 30,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Cable eléctrico THW 12 AWG",
    unidad: "metro",
    precio: 0.45,
    cantidad: 200,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Caja de registro",
    unidad: "c/u",
    precio: 1.5,
    cantidad: 20,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Tubo conduit 3/4\"",
    unidad: "tramo",
    precio: 3.0,
    cantidad: 25,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Foco LED 9W",
    unidad: "c/u",
    precio: 2.5,
    cantidad: 40,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Tablero eléctrico",
    unidad: "c/u",
    precio: 35.0,
    cantidad: 2,
    categoria: "Eléctrico"
  },
  {
    id: getRandomId(),
    nombre: "Breaker 20A",
    unidad: "c/u",
    precio: 4.5,
    cantidad: 10,
    categoria: "Eléctrico"
  }
];