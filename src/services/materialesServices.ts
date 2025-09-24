import type { Material } from "@/types/materialesTypes";
import { baseURL } from "./utility";

export const getMateriales = async () => {
  const res = await fetch(`${baseURL}/materiales`);
  return res.json();
}

export async function agregarMaterial(nuevoMaterial : Material) {
  const res = await fetch(`${baseURL}/materiales`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoMaterial),
  });
  return res.json();
}