import type { Material } from '@/types/materialesTypes'
import TableHeader from './TableHeader';

interface propsTable {
  data: Material[],
  dataFiltro: string,
  modificarFiltro: Function,
}

const TableProductos = ({data, dataFiltro, modificarFiltro}: propsTable) => {
  console.log('el filtro:', dataFiltro);

  const materialExacto = dataFiltro ? data.filter( dato => dato.nombre.toLowerCase().includes(dataFiltro.toLowerCase())) : []
  console.log(materialExacto);
  
  //Key de objeto por materiales
  const materialesClave = Object.keys(data[0]) as Array<keyof Material>;

  return (
    <TableHeader claves={materialesClave} >
      { materialExacto.length === 1 
        ? ( materialExacto.map( material => 
          <tr>
              {materialesClave.map( clave => (<td>{ material[clave] }</td>))}
            </tr>
         )) 
        : (
          data.map( material => (
            <tr>
              {materialesClave.map( clave => (<td>{ material[clave] }</td>))}
            </tr>
          ))
        )
      
      }
    </TableHeader>
  )
}

export default TableProductos