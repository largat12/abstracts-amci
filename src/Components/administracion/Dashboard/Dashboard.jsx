import React from 'react'
import { useContext } from 'react'
import { ContextAppAdministracion } from '../../../context/ContextAppAdministracion'
import { DashboardInvestigaciones } from './DashboardInvestigaciones/DashboardInvestigaciones'

export const Dashboard = () => {
  const { pageDashboard } = useContext(ContextAppAdministracion)
  if(pageDashboard.page === 'investigaciones') return <DashboardInvestigaciones />
}
