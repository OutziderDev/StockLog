import { materiales } from '@/data/materiales'
import '@/components/Inventario/inventary.css'
import { useState } from 'preact/hooks';
import FiltroInput from './FiltroInput';
import type { JSX } from 'preact/jsx-runtime';
import TableProductos from './TableProductos';

export default function Inventary () {

  //Estado para materiales
  const [productos, setProductos] = useState(null);
  const [ filtro, setFiltro ] = useState('');

  //funciones Handles
  const handleFiltro = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    e.preventDefault();
    setFiltro(e.currentTarget.value);
  }
  
  if (!materiales) return 
  
  return (
    <>
      <FiltroInput dato={filtro} onChange={handleFiltro} />
      <TableProductos data={materiales} dataFiltro={filtro} modificarFiltro={setFiltro} />
    </>  
  )
}