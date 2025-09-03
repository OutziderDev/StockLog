import { materiales } from '@/data/materiales'
import '@/components/Inventario/inventary.css'
import LupaIcon from '@/assets/icons/lupa.svg'
import { useState } from 'preact/hooks';
import FiltroInput from './FiltroInput';
import type { JSX } from 'preact/jsx-runtime';

export default function Inventary () {
  //Key de objeto por materiales
  type Material = typeof materiales[0];
  const materialesClave = Object.keys(materiales[0]) as Array<keyof Material>;

  //Estado para materiales
  const [productos, setProductos] = useState(null);
  const [ filtro, setFiltro ] = useState('');

  //funciones Handles
  const handleFiltro = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    e.preventDefault();
    setFiltro(e.currentTarget.value);
    console.log(filtro);
  }
  
  if (!materiales) return 
  
  return (
    <>
    <FiltroInput dato={filtro} onChange={handleFiltro} />

    <table className={'inventarioTable'}>
      {/* <caption>Materiales en Inventario</caption>  */} 
      <thead>
        <tr>
          {materialesClave.map( clave => <th>{clave.toLocaleUpperCase()}</th>)}
          <th>Opcion</th>
        </tr>
      </thead>
      <tbody>
        {materiales.map( material => (
          <tr>
            {materialesClave.map( clave => (<td style={clave == 'cantidad' || clave == 'nombre'  ? 'font-weight:bold;text-align:center;' : ''} >  {material[clave]}</td>))}
          </tr>
        ))}
      </tbody>
       {/* <tfoot>Tabla de Materiales en el sistema</tfoot>   */}
    </table>
    </>  
  )
}