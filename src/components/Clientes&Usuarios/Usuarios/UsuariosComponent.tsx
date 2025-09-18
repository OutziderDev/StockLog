import UsuariosFiltros from "@/components/Clientes&Usuarios/Usuarios/UsuariosFiltros"
import UsuariosTabla from "@/components/Clientes&Usuarios//Usuarios/UsuariosTabla"
import { useEffect, useState } from "preact/hooks"
import { getUsuarios } from "@/services/usuariosServices"

const UsuariosComponent = () => {
  const [filtroUsuario, setFiltroUsuario] = useState('')
  const [listUsuarios, setListUsuarios] = useState([])

  useEffect( () => {
    async function fetchUsuarios(){
      const result = await getUsuarios()
      setListUsuarios(result)
    }
    fetchUsuarios();
  },[])

  return (
    <>
      <UsuariosFiltros />
      <UsuariosTabla dataUsuarios= {listUsuarios} />
    </>
  )
}

export default UsuariosComponent