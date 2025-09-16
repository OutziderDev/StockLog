import UsuariosFiltros from "@/components/Clientes&Usuarios/Usuarios/UsuariosFiltros"
import UsuariosTabla from "@/components/Clientes&Usuarios//Usuarios/UsuariosTabla"
import { useState } from "preact/hooks"

const UsuariosComponent = () => {
  const [filtroUsuario, setFiltroUsuario] = useState('')
  const [listUsuarios, setListUsuarios] = useState([])
  
  return (
    <>
      <UsuariosFiltros  />
      <UsuariosTabla />
    </>
  )
}

export default UsuariosComponent