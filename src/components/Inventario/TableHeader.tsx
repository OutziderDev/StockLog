import type { Material } from "@/types/materialesTypes"
import type { ComponentChildren } from "preact"

interface TableHeaderProps {
  claves: (keyof Material)[],
  children: ComponentChildren

}

export default function TableHeader ({claves, children}: TableHeaderProps)  {
  return(
    <table className={'inventarioTable'}>
      <thead>
        <tr>
          {claves.map( clave => <th>{ clave }</th>)}
          {/* <th>Opcion</th> */}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}