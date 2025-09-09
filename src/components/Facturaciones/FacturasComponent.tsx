import { useState } from "preact/hooks"

export default function FacturasComponent () {
  const [facturas, setFacturas] = useState({
    cliente: '',
    fecha: '',
    total: '',
    subtotal: '',
  })
  return (
    <div>hola</div>
  )
}