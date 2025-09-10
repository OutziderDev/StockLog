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