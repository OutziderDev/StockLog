import LupaIcon from '@/assets/icons/lupa.svg'
import type { JSX } from 'preact/jsx-runtime';

interface FiltrosProps {
  dato: {
    texto:string,
    categoria:string
  },
  onChangeTexto: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  onChangeSelect: (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => void;
}

const FiltroInput = ({ dato, onChangeTexto,onChangeSelect }: FiltrosProps) => {
  return (
    <section>
      <h2 class="sr-only">Panel de Filtros</h2>
      <form className={"formFilters"} onSubmit={(e) => {e.preventDefault()}}>
        
        <label for="inputbusqueda" class="sr-only">Buscar Productos</label>
        <input type="text" name="inputbusqueda" onChange={onChangeTexto} id="inputbusqueda" value={dato.texto} class="inputbase" placeholder="Buscar Producto..." />

        <label for="inputCategoria" class="sr-only">Busqueda con Categoría</label>
        <select name="inputCategoria" class="inputbase" id="inputCategoria" onChange={onChangeSelect}>
          <option value="" selected>Todas</option>
          <option value="Electricidad">Electricidad</option>
          <option value="Plomería">Plomería</option>
          <option value="Construcción">Construcción</option>
        </select>

        {/* <button type="submit" className={'btnform'}> <img src={LupaIcon.src} aria-hidden="true" alt={''}/> Filtrar</button> */}
      </form>
    </section> 
  );
}

export default FiltroInput