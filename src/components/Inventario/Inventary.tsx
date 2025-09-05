import '@/components/Inventario/inventary.css'
import { useEffect, useState } from 'preact/hooks';
import FiltroInput from './FiltroInput';
import type { JSX } from 'preact/jsx-runtime';
import TableProductos from './TableProductos';
import { getMateriales } from '@/services/materialesServices'

export default function Inventary () {
  //Estado para materiales
  const [materiales, setMateriales] = useState(null);
  /* console.log('los materiales son:',materiales); */
  
  const [ filtro, setFiltro ] = useState('');

  useEffect(() => {
     async function fetchMateriales() {
      try {
        const materiales = await getMateriales()
        setMateriales(materiales)
      } catch (error) {
        console.error('Error cargando materiales:', error);
      }

    }
    fetchMateriales();
  },[])
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