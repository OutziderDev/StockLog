import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response (
    JSON.stringify({mensaje: "hola desde Astro API, saludo!"}),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}