import ClientesFiltros from "@/components/Clientes&Usuarios/ClientesFiltros"
import ClientesTabla from "@/components/Clientes&Usuarios/ClientesTabla"
import { useEffect, useState } from "preact/hooks"
import { getClientes } from "@/services/clientesServices"
import type { JSX } from "preact/jsx-runtime"

export default function ClientesComponent() {
  const [listaClientes, setListaClientes] = useState([])
  const [filtroCliente, setFiltroCliente] = useState('')

  useEffect( () => {
    async function fetchClientes() {
      const lista = await getClientes();
      setListaClientes(lista)
    }
    fetchClientes()
  }, [])

  const handleClienteFiltro = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFiltroCliente( e.currentTarget.value)
  }
  return (
    <>
      <ClientesFiltros datoFiltro={filtroCliente} onChangeFiltro={handleClienteFiltro} />
      <ClientesTabla dataClientes={listaClientes} dataFiltro={filtroCliente} />
    </>
  )
}