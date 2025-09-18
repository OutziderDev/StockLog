import type { JSX } from "preact/jsx-runtime"

interface UsuariosFiltrosProps {
  dataFiltro: string,
  handleFiltro: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void
}

const UsuariosFiltros = ({ dataFiltro, handleFiltro }: UsuariosFiltrosProps) => {
  return(
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputSearchUser">Nombre del Usuario: </label>
      <input type="text" id={"inputSearchUser"} value={dataFiltro} className={"inputbase"}  placeholder={"Benny Moré"} onChange={handleFiltro} />
    </form>
  )
}

export default UsuariosFiltros