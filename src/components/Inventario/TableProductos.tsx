interface propsTable {
  data: Array<object>,
  dataFiltro: string,
  modificarFiltro: Function,
}

const TableProductos = ({data, dataFiltro, modificarFiltro}: propsTable) => {
  //Key de objeto por materiales
  type Material = typeof data[0];
  const materialesClave = Object.keys(data[0]) as Array<keyof Material>;

  return (
    <table className={'inventarioTable'}>
      <thead>
        <tr>
          {materialesClave.map( clave => <th>{ clave }</th>)}
          {/* <th>Opcion</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map( material => (
          <tr>
            {materialesClave.map( clave => (<td>  {material[clave]}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableProductos