import Reportesfiltros from "@/components/Reportes/Reportesfiltros"
import TablaReportes from "@/components/Reportes/TablaReportes"
import { useEffect, useState } from "preact/hooks"
import type { JSX } from 'preact/jsx-runtime';

import { getReportes } from "@/services/reportesServices"

export default function ReportesComponent () {
  const [reportes, setReportes] = useState([])
  const [filtrosReportes, setFiltrosReportes] = useState({
    textoFactura: '',
    selectOrden: ''
  })

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

  /* Funciones Handles para filtros */
  const handleFiltroReporte = (e : JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setFiltrosReportes(data => ({
      ...data,
       textoFactura: e.currentTarget.value
    }) ) 
  }

  const handleOrdenReporte = ( e : JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    setFiltrosReportes( dato => ({
      ...dato,
      selectOrden: e.currentTarget.value
    }))
  }

  return (
    <>
      <Reportesfiltros datos={filtrosReportes} onSearchChange={handleFiltroReporte} onOrderChange={handleOrdenReporte}/>
      <TablaReportes data={reportes}/>
    </>
  )
}