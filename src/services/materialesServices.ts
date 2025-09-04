const baseURL = '/api'

export const getMateriales = async () => {
  const res = await fetch(`${baseURL}/materiales`);
  return res.json();
}

export async function addMaterial(material: { nombre: string; cantidad: number }) {
  const res = await fetch("/api/materiales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  });
  return res.json();
}
