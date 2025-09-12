import Reportesfiltros from "@/components/Reportes/Reportesfiltros"
import TablaReportes from "@/components/Reportes/TablaReportes"
import { useEffect, useState } from "preact/hooks"
import { getReportes } from "@/services/reportesServices"

export default function ReportesComponent () {
  const [reportes, setReportes] = useState([])
  const [filtrosReportes, setFiltrosReportes] = useState('')

  /* Fetch a los reportes */
  useEffect(() => {
    async function obtenerReportes() {
      try {
        const data = await getReportes();
        setReportes(data);
      } catch (error) {
        console.error('ah ocurrido algo', error);
      }
    }
    obtenerReportes();
  },[])
  return (
    <>
      <Reportesfiltros />
      <TablaReportes data={reportes}/>
    </>
  )
}