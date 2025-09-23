import UsuariosFiltros from "@/components/Clientes&Usuarios/Usuarios/UsuariosFiltros"
import UsuariosTabla from "@/components/Clientes&Usuarios//Usuarios/UsuariosTabla"
import { getUsuarios } from "@/services/usuariosServices"
import PopoverAddUsuario from "./PopoverAddUsuario"
import { useEffect, useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"

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

  /* Funciones Handle */
  const handleUserFiltro = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFiltroUsuario( e.currentTarget.value)
  }

  return (
    <>
      <UsuariosFiltros dataFiltro={filtroUsuario} handleFiltro={handleUserFiltro} />
      <UsuariosTabla dataUsuarios= {listUsuarios} dataFiltro={filtroUsuario} />
      <PopoverAddUsuario />
    </>
  )
}

export default UsuariosComponent