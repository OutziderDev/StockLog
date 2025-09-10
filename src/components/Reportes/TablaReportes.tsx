import type { Reporte } from "@/types/reportesTypes"

interface reportesProps{
  data: Reporte[],
}

export default function TablaReportes ({data}: reportesProps) {
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
        <tr>
          <td>#16541</td>
          <td>Mauricio</td>
          <td>Venta</td>
          <td>16-3-2025</td>
          <td>$ 143.25</td>
          <td>view</td>
        </tr>
        <tr>
          <td>#6412</td>
          <td>Raquel</td>
          <td>Compra</td>
          <td>16-8-2026</td>
          <td>$ 287.24</td>
          <td>view</td>
        </tr>
      </tbody>
    </table>
  )
}