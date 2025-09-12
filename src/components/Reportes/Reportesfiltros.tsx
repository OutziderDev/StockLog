export default function Reportesfiltros () {
  return( 
    <>
      <section>
        <h2 class="sr-only">Panel de Filtros para Reportes</h2>
        <form className={"formFilters"} onSubmit={(e) => {e.preventDefault()}}>
          
          <label for="inputSearchReport" class="sr-only">Buscar Reporte</label>
          <input type="text" name="inputSearchReport" id="inputSearchReport" value={""} class="inputbase" placeholder="Factura #15434..." />

          <label for="inputOrdenReport" class="sr-only">Ordenar por:</label>
          <select name="inputOrdenReport" class="inputbase" id="inputOrdenReport"> {/* onChange={onChangeSelect} */}
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