import type { TargetedEvent } from "preact/compat"

interface ClienteFiltrosProps{
  datoFiltro: string,
  onChangeFiltro: (e: TargetedEvent<HTMLInputElement, Event> ) => void
}

const ClientesFiltros = ({ datoFiltro , onChangeFiltro}: ClienteFiltrosProps) => {
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className={""} htmlFor="NombreCliente">Nombre del Cliente:</label>
      <input type="text" id={"NombreCliente"} className={"inputbase"} onChange={onChangeFiltro} value={datoFiltro} placeholder={"Pedro Altamiranda"} />
    </form>
  )
}

export default ClientesFiltros