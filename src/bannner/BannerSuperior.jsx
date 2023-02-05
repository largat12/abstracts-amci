import React from 'react'

export const BannerSuperior = () => {
  return (
    <img src={process.env.PUBLIC_URL+"img/banner.jpg"} className="banner" style={{width: 100+"%"}} alt="Banner trabajos libres"/>
  )
}
