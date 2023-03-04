import './css/Dasshboard.css'
import React, { useContext }from 'react'
import { ContextAppAdministracion } from '../../../context/ContextAppAdministracion'
import { DashboardInvestigaciones } from './DashboardInvestigaciones/DashboardInvestigaciones'
import { DetailsInvestigaciones } from './DetailsInvestigaciones/DetailsInvestigaciones'
import { DashboardInvestigadores } from './DashboardInvestigadores/DashboardInvestigadores'
import { DashboradUsuarios } from './DashboradUsuarios/DashboradUsuarios'
import { DashboardExportarData } from './DashboardExportarData/DashboardExportarData'
import { AnadirUsuario } from './DashboradUsuarios/AnadirUsuario/AnadirUsuario'
import { DashboardEvaluacionesAsignadas } from './DashboardEvaluacionesAsignadas/DashboardEvaluacionesAsignadas'

export const Dashboard = () => {
  const { pageDashboard } = useContext(ContextAppAdministracion)
  if(pageDashboard.page === 'investigaciones') return <DashboardInvestigaciones />
  else if(pageDashboard.page === 'detallesInvestigacion' || pageDashboard.page === 'detallesInvestigadores') return <DetailsInvestigaciones />
  else if(pageDashboard.page === 'investigadores') return <DashboardInvestigadores />
  else if(pageDashboard.page === 'evaluaciones-asignadas') return <DashboardEvaluacionesAsignadas/>
  else if(pageDashboard.page === 'usuarios') return <DashboradUsuarios />
  else if(pageDashboard.page === 'anadirUsuario') return <AnadirUsuario />
  else if(pageDashboard.page === 'exportar') return <DashboardExportarData />
}
