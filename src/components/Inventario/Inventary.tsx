import { materiales } from '@/data/materiales'
import '@/components/Inventario/inventary.css'

export default function Inventary () {
  type Material = typeof materiales[0];
  const materialesClave = Object.keys(materiales[0]) as Array<keyof Material>;

  return (
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
  )
}