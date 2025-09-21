import "@/components/Clientes&Usuarios/Cliente/stylesclientes.css"

export default function PopoverAddCliente () {
  return(
    <section id="addClientePopover" popover>
      <header>
        <h2>Agrega un nuevo cliente</h2>
      </header>
      <form action="api/clientes" method="POST">
        <label > 
          Nombre:
          <input type="text" name="" id="" class="inputbase" required/>
        </label>
        <label >
          Email:
          <input type="text" name="" id="" class="inputbase" required/>
        </label>
        <label >
          Dirección
          <input type="text" name="" id="" class="inputbase" required/>
        </label>
        <button>Registrar</button>
      </form>
    </section>
  )
}