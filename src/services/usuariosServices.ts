import { baseURL } from "./utility";

export const getUsuarios = async () => {
  const respuesta = await fetch(`${baseURL}/usuarios`);
  return respuesta.json()
}