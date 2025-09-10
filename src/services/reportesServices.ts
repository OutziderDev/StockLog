import { baseURL } from "./utility";
 
export const getReportes = async () => {
  const result = await fetch(`${baseURL}/reportes`);
  return result.json()
}