import type { APIRoute } from "astro";
import { supabase } from '@/scripts/supabaseClient'

 export const GET : APIRoute = async () => {
  try {
    const {data, error} = await supabase.from('facturas').select('id,cliente:clientes(nombre),tipo,total,fecha')

    if (error) {
      return new Response(
        JSON.stringify({ mensaje: 'algo va mal en query de facturas', error }),
        {
          status: 500,
          headers: { 'Content-type': 'application/json' }
        }
      );
    }
    const formattedWithCliente = data.map( ( reporte : any) => ({
      ...reporte,
      cliente: reporte.cliente.nombre 
    }))

    return new Response( JSON.stringify(formattedWithCliente), {
      status:200,
      headers: { 'Content-type': 'application/json'}
    })

    
  } catch (error) {
    return new Response( JSON.stringify({mensaje: 'algo va mal', error}))
  }
} 