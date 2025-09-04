// src/services/materiales.ts
export async function getMateriales() {
  const res = await fetch("/api/materiales");
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