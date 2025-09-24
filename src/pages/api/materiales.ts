import type { APIRoute } from "astro";
import { supabase } from '@/scripts/supabaseClient'

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase.from('materiales').select('id,nombre,cantidad,precio,categoria:categorias(nombre),unidad:unidad_medida(nombre)').order('nombre', {ascending: true})
       
    if (error) {
      return new Response(JSON.stringify({Error: error.message}), {status:500})
    }

    const formatted = data.map( (material :any) => ({
      ...material,
      categoria: material.categoria.nombre ?? null,
      unidad: material.unidad.nombre ?? null
    }) ) 

    return new Response(JSON.stringify(formatted), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response("paso algo", {status:500})
  }

};

export const POST : APIRoute = async ({ request }) => {
  try {
    const { nombre, cantidad, precio, categoria, unidad } = await request.json()
    
    if (!nombre || !cantidad || !precio || !categoria || !unidad ) {
      return new Response( JSON.stringify({error: "Faltan campos obligatorios"}) ,{status:400})
    }

    const { data, error } = await supabase
    .from('materiales')
    .insert({ nombre, cantidad,precio, categoria, unidad })
    .select() /* para devolver el fichero ingresado */
  
    if(error){
      return new Response( JSON.stringify({error: error.message}), {status:500})
    }

    return new Response( JSON.stringify(data), {status:201, headers: {"Content-type": "application/json"}})
    
  } catch (error) {
    return new Response(JSON.stringify({ error: "Fallo en la petición"}), {status: 500})
  }
}