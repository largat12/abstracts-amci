import React from 'react'
import { useContext } from 'react'
import { ContextAppAdministracion } from '../../../context/ContextAppAdministracion'

export const Dashboard = () => {
  const { pageDashboard } = useContext(ContextAppAdministracion)
  return (
    <div>Dashboard {pageDashboard.page}</div>
  )
}
