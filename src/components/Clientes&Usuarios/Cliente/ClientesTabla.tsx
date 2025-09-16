import type { Cliente } from "@/types/clientesTypes"

interface ClientesTablaProps {
  dataClientes: Cliente[],
  dataFiltro: string
}

export default function ClientesTabla({ dataClientes, dataFiltro }: ClientesTablaProps) {
  /* console.log('lista de cliente', dataClientes);
  console.log('el filtro:', dataFiltro); */

  const clienteExacto = dataClientes.filter( cliente => cliente.nombre.toLocaleLowerCase().includes(dataFiltro.toLocaleLowerCase()))
  /* console.log('el xliente', clienteExacto); */
  
  return (
    <table className={"tablestyles"}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Opción</th>
        </tr>
      </thead>
      <tbody>
        { 
          clienteExacto.length >= 1 
          ? ( 
            clienteExacto.map( cliente => (
              <tr>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.dirección}</td>
                <td>view</td>
              </tr>
            ))
          ) 
          : (
            <tr>
              <td>─</td>
              <td>Sin Coincidencia</td>
              <td>─</td>
              <td>─</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}