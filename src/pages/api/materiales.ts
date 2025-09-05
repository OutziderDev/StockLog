import type { APIRoute } from "astro";
import { supabase } from '@/scripts/supabaseClient'

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase.from('materiales').select('id,nombre,cantidad,precio,categoria:categorias(nombre),unidad:unidad_medida(nombre)')
     
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