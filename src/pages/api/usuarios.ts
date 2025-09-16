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