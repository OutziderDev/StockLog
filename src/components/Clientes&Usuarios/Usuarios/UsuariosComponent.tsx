import UsuariosFiltros from "@/components/Clientes&Usuarios/Usuarios/UsuariosFiltros"
import UsuariosTabla from "@/components/Clientes&Usuarios//Usuarios/UsuariosTabla"
import { useEffect, useState } from "preact/hooks"

const UsuariosComponent = () => {
  const [filtroUsuario, setFiltroUsuario] = useState('')
  const [listUsuarios, setListUsuarios] = useState([])

  useEffect( () => {
    function fetchUsuarios(){
       
    }
  }/* falta [] */)

  return (
    <>
      <UsuariosFiltros  />
      <UsuariosTabla />
    </>
  )
}

export default UsuariosComponent