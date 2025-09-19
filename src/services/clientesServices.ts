import { baseURL } from "./utility";
import type { Cliente } from "@/types/clientesTypes";

export const getClientes = async () => {
  const respuesta = await fetch(`${baseURL}/clientes`);
  return respuesta.json();
} 

export const crearCliente = async (nuevoCliente : Cliente) => {
  const respuesta = await fetch(`${baseURL}/clientes`, 
    { method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(nuevoCliente)
    }
  )
  return respuesta.json()
}