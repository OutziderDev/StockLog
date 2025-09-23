import "@/components/Clientes&Usuarios/Cliente/stylesclientes.css"
import { crearCliente } from "@/services/clientesServices"
import type { Cliente } from "@/types/clientesTypes"
import type { JSX } from "preact/jsx-runtime"
import { useState } from "preact/hooks"

export default function PopoverAddCliente () {
  const [formData, setFormData] = useState<Cliente>({nombre: '', email: '', direccion: ''})

  console.log("form data: ", formData);

  const handleInput = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value})
  }

  const handleSubmit = async (e : JSX.TargetedEvent<HTMLFormElement, Event>) => {
    /* e.preventDefault(); */
    await crearCliente(formData);
    (document.querySelector('#addClientePopover') as HTMLElement).hidePopover();
  }
  
  return(
    <section id="addClientePopover" popover>
      <header>
        <h2>Agrega un nuevo cliente</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <label > 
          Nombre:
          <input type="text" name="nombre" id="nombre" className="inputbase" required onChange={handleInput}/>
        </label>
        <label >
          Email:
          <input type="text" name="email" id="email" className="inputbase" required onChange={handleInput}/>
        </label>
        <label >
          Dirección
          <input type="text" name="direccion" id="direccion" className="inputbase" required onChange={handleInput}/>
        </label>
        <button type="submit">Registrar</button>
      </form>
    </section>
  )
}