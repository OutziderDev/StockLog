import type { TargetedEvent } from "preact/compat"

interface ReportesFiltrosProp {
  datos: {
    textoFactura: string,
    selectOrden: string
  },
  onSearchChange: (e : TargetedEvent<HTMLInputElement, Event>) => void,
  onOrderChange: (e : TargetedEvent<HTMLSelectElement, Event>) => void

}
export default function Reportesfiltros ( { datos, onSearchChange, onOrderChange } : ReportesFiltrosProp) {
  console.log('los filtros en componente: ',datos);
  
  return( 
    <>
      <section>
        <h2 class="sr-only">Panel de Filtros para Reportes</h2>
        <form className={"formFilters"} onSubmit={(e) => {e.preventDefault()}}>
          
          <label for="inputSearchReport" class="sr-only">Buscar Reporte</label>
          <input type="text" name="inputSearchReport" id="inputSearchReport" onChange={onSearchChange} value={datos.textoFactura} class="inputbase" placeholder="Factura #15434..." />

          <label for="inputOrdenReport" class="sr-only">Ordenar por:</label>
          <select name="inputOrdenReport" class="inputbase" id="inputOrdenReport" onChange={onOrderChange}>
            <option value="" disabled selected>Orden</option>
            <option value="fecha">Fecha</option>
            <option value="monto">Monto</option>
            <option value="clientes">Clientes</option>
            <option value="tipo">Tipo</option>
          </select>

        </form>
      </section> 
    </>
  )
}