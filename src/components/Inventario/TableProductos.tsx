import type { Material } from '@/types/materialesTypes'
import TableHeader from './TableHeader';

interface propsTable {
  data: Material[],
  dataFiltro: {
    texto:string,
    categoria:string
  },
  modificarFiltro: Function,
}

const TableProductos = ({data, dataFiltro, modificarFiltro}: propsTable) => {
  console.log("datos desde tabla:",data);
  console.log("filtros en tabla:",dataFiltro);
  
  const materialExacto = data.filter( dato => {
    const tieneTexto = dataFiltro.texto === '' || dato.nombre.toLowerCase().includes(dataFiltro.texto.toLowerCase())
    const tieneCategoria = dataFiltro.categoria === '' || dato.categoria.toLowerCase().includes(dataFiltro.categoria.toLowerCase())

    return tieneTexto && tieneCategoria
  })
  console.log('buscando material:',materialExacto);
  
  //Key de objeto por materiales
  const materialesClave = Object.keys(data[0]) as Array<keyof Material>;

  return (
    <TableHeader claves={materialesClave} >
      { materialExacto.length >= 1 ? (
          materialExacto.map( material => 
            <tr>
              {
                materialesClave.map( clave => (
                  <td>
                    { clave === 'precio' 
                      ? material[clave].toFixed(2)  
                      : material[clave] 
                    }
                  </td>
                ))
              }
            </tr>
          )
        ) : (
          <tr>
            <td>XX</td>
            <td>Sin Coincidencias</td>
            <td>─</td>
            <td>─</td>
            <td>─</td>
            <td>─</td>
          </tr>
        )  
      }
    </TableHeader>
  )
}

export default TableProductos
