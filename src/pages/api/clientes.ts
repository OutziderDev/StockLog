import type { APIRoute } from "astro";
import { supabase } from "@/scripts/supabaseClient";

export const GET : APIRoute = async () => {
  try {
    const { data, error} = await supabase.from('clientes').select('*')

    if(error){
      return new Response('algo mal en la query', {status:500})
    }

    return new Response( 
      JSON.stringify(data),{
        headers: { "Content-Type": "application/json" },
      }
    )

  } catch (error) {
    return new Response("paso algo", {status: 500})
  }
}

export const POST : APIRoute = async ({ request }) => {
  try {
    const { nombre, email, direccion } = await request.json()
    
    if (!nombre || !email || !direccion ) {
      return new Response( JSON.stringify({error: "Faltan campos obligatorios"}) ,{status:400})
    }

    const { data, error } = await supabase
    .from('clientes')
    .insert({ nombre, email,direccion })
  
    if(error){
      return new Response( JSON.stringify({error: error.message}), {status:500})
    }

    return new Response( JSON.stringify(data), {status:201, headers: {"Content-type": "application/json"}})
    
  } catch (error) {
    return new Response(JSON.stringify({ error: "Fallo en la petición"}), {status: 500})
  }
}