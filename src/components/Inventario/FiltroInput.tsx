import LupaIcon from '@/assets/icons/lupa.svg'

interface FiltroInputProps {
  dato: string;
  onChange: (value: string) => void;
}

export default function FiltroInput({ dato, onChange }: FiltroInputProps) {

  return (
    <section>
      <h2 class="sr-only">Panel de Filtros</h2>
      <form action="">
        
        <label for="inputbusqueda" class="sr-only">Buscar Productos</label>
        <input type="text" name="inputbusqueda" id="inputbusqueda" class="inputbase" placeholder="Buscar Producto..." />

        <label for="inputCategoria" class="sr-only">Busqueda con Categoría</label>
        <select name="inputCategoria" class="inputbase" id="inputCategoria">
          <option value="" disabled selected>Selecciona una categoría</option>
          <option value="herramientas">Herramientas</option>
          <option value="materiales">Materiales</option>
          <option value="maquinaria">Maquinaria</option>
        </select>

        {/* <label for="inputUbicacion" class="sr-only">Busqueda con Bodega</label>
        <select name="inputUbicacion" class="inputbase" id="inputUbicacion">
          <option value="" disabled selected>Selecciona una Ubicacíon</option>
          <option value="bodega1">Bodega 1</option>
          <option value="bodega2">Bodega 2</option>
          <option value="bodega3">Bodega 3</option>
        </select> */}
        
        <button type="submit" className={'btnform'}> <img src={LupaIcon.src} aria-hidden="true" alt={''}/> Filtrar</button>
      </form>
    </section> 
  );
}