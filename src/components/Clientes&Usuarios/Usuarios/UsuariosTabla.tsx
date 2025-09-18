import type { Usuario } from "@/types/usuariosTypes"

interface UsuarioTablaProps {
  dataUsuarios: Usuario[],
}
const UsuariosTabla = ({dataUsuarios}: UsuarioTablaProps) => {
  console.log('data user:',dataUsuarios);
  
  return(
    <div>tabla</div>
  )
}

export default UsuariosTabla