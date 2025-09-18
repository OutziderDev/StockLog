import type { Usuario } from "@/types/usuariosTypes"

interface UsuarioTablaProps {
  dataUsuarios: Usuario[],
}
const UsuariosTabla = ({dataUsuarios}: UsuarioTablaProps) => {
  console.log('data user:',dataUsuarios);
  const usuarioExacto = dataUsuarios
  
  return(
    <table className={"tablestyles"}>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>opción</th>
        </tr>
      </thead>
      <tbody>
        {
          usuarioExacto.length >= 1 ? 
          ( 
            usuarioExacto.map( usuario => (
              <tr>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>view</td>
              </tr>
            ))
          )  :
          (
            <tr>
              <td>─</td>
              <td>Sin Coincidencias</td>
              <td>─</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default UsuariosTabla