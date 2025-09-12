import type { Reporte } from "@/types/reportesTypes"

interface reportesProps{
  data: Reporte[],
  filtros: {
    textoFactura: string,
    selectOrden: string
  }
 }

export default function TablaReportes ({ data, filtros}: reportesProps) {
  /* console.log('filtros desde tabla, ya editados: ', filtros); */
  
  return(
    <table className={"tablestyles"}>
      <thead>
        <tr>
          <th>Factura</th>
          <th>Cliente</th>
          <th>Tipo</th>
          <th>Fecha</th>
          <th>Monto</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map( reporte => (
            <tr>
              <td># {reporte.id}</td>
              <td>{reporte.cliente}</td>
              <td>{reporte.tipo}</td>
              <td>{new Date(reporte.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric"})}</td>
              <td>$ {reporte.total}</td>
              <td>view</td>
            </tr>
          ))
        }        
      </tbody>
    </table>
  )
}