import { baseURL } from "./utility";

export const getClientes = async () => {
  const respuesta = await fetch(`${baseURL}/clientes`);
  return respuesta.json();
} 