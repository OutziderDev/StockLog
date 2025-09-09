import Reportesfiltros from "@/components/Reportes/Reportesfiltros"
import TablaReportes from "@/components/Reportes/TablaReportes"
import { useState } from "preact/hooks"

export default function ReportesComponent () {
  const [reportes, setReportes] = useState('')
  const [filtrosReportes, setFiltrosReportes] = useState('')
  
  return (
    <>
      <Reportesfiltros />
      <TablaReportes />
    </>
  )
}