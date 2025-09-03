import { materiales } from '@/data/materiales'

interface propsTable {
  data: Array<object>,
  dataFiltro: string,
  modificarFiltro: Function,
}

const TableProductos = ({data, dataFiltro, modificarFiltro}: propsTable) => {
  //Key de objeto por materiales
  type Material = typeof materiales[0];
  const materialesClave = Object.keys(materiales[0]) as Array<keyof Material>;

  return (
    <table className={'inventarioTable'}>
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
    </table>
  )
}

export default TableProductos