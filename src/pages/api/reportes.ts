import type { APIRoute } from "astro";
import { supabase } from '@/scripts/supabaseClient'

/* export const GET: APIRoute = async () => {
  try {
    return new Response (
      JSON.stringify({saludo: "holaaa desde reportes"}),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  } catch (error) {
    console.error('problema',error);
    
  }
} */