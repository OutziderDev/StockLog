import type { APIRoute } from "astro";
import { supabase } from '@/scripts/supabaseClient'

export const GET: APIRoute = async () => {
  try {
    const { data, error} = await supabase.from('usuarios').select('*')

    if(error){
      return new Response(JSON.stringify({Error: error.message}),{status:500})
    }

    return new Response( JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }, 
    })
  } catch (error) {
    return new Response("paso algo", {status:500})
  }
}

export const POST : APIRoute = async ({ request }) => {
  try {
    const { nombre, user } = await request.json()
    console.log('el usuario es:', nombre);
    
    if (!nombre || !user ) {
      return new Response( JSON.stringify({error: "Faltan campos obligatorios"}) ,{status:400})
    }

    const { data, error } = await supabase
    .from('usuarios')
    .insert({ nombre, user })
    .select()
  
    if(error){
      return new Response( JSON.stringify({error: error.message}), {status:500})
    }

    return new Response( JSON.stringify(data), {status:201, headers: {"Content-type": "application/json"}})
    
  } catch (error) {
    return new Response(JSON.stringify({ error: "Fallo en la petición"}), {status: 500})
  }
}