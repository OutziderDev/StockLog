import { getMateriales } from '@/services/materialesServices'
import { useEffect, useState } from 'preact/hooks';
import type { JSX } from 'preact/jsx-runtime';
import TableProductos from './TableProductos';
import Filtros from './Filtros';

export default function Inventary () {
  //Estado para materiales
  const [materiales, setMateriales] = useState(null);
  
  const [ filtro, setFiltro ] = useState({
    texto: '',
    categoria: ''
  });

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
  const handleTextoFiltroChange = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    e.preventDefault();
    setFiltro(prev => ({...prev, texto: e.currentTarget.value}));
  }

  const handleSelectFiltroChange = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    setFiltro(prev => ({...prev,categoria: e.currentTarget.value}));
  }
  
  if (!materiales) return 
  
  return (
    <>
      <Filtros dato={filtro} onChangeTexto={handleTextoFiltroChange} onChangeSelect={handleSelectFiltroChange} />
      <TableProductos data={materiales} dataFiltro={filtro} modificarFiltro={setFiltro} />
    </>  
  )
}