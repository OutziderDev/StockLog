import "@/components/Clientes&Usuarios/Usuarios/stylesusuarios.css"
import { crearUsuario } from "@/services/usuariosServices"
import type { JSX } from "preact/jsx-runtime"
import { useState } from "preact/hooks"

export default function PopoverAddUsuario ({}) {
  /* Estados */
  const [formUserData, setFormUserData] = useState({nombre: '', user: ''})

  /* Funciones Handles */
  const handleInput = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFormUserData({...formUserData, [e.currentTarget.name]: e.currentTarget.value})
  }

  const handleSubmit = async (e : JSX.TargetedEvent<HTMLFormElement, Event>) => {
    await crearUsuario(formUserData)
  }

  return (
    <section id={"addUsuarioPopover"} popover>
        <header>
          <h2>Agregar Usuario</h2>
        </header>
        <form onSubmit={handleSubmit} id={"formAddUsuarioPopover"}>
          <label > 
          Nombre:
          <input type="text" name="nombre" id="nombre" className="inputbase" required onChange={handleInput}/>
        </label>
        <label >
          Nick:
          <input type="text" name="user" id="user" className="inputbase" required onChange={handleInput}/>
        </label>
        
        <button type="submit">Registrar</button>
        </form>
      </section>
  )
}