import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const materiales = [ {pala: "roja", mango:"duro"}] /* = await sql`SELECT * FROM materiales`; */
  return new Response(JSON.stringify(materiales), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { nombre, cantidad } = body;
  /* await sql`INSERT INTO materiales (nombre, cantidad) VALUES (${nombre}, ${cantidad})`; */
  return new Response(JSON.stringify({ ok: true }), { status: 201 });
};