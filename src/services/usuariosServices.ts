import type { Usuario } from "@/types/usuariosTypes";
import { baseURL } from "./utility";

export const getUsuarios = async () => {
  const respuesta = await fetch(`${baseURL}/usuarios`);
  return respuesta.json()
}

export const crearUsuario = async (nuevoUsuario : Usuario) => {
  const respuesta = await fetch(`${baseURL}/usuarios`, 
    { method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(nuevoUsuario)
    }
  )
  return respuesta.json()
}