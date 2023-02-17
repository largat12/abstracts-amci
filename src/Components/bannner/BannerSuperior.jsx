import React from 'react'

export const BannerSuperior = () => {
  return (
    <img src={process.env.PUBLIC_URL+"img/banner.jpg"} className="banner" style={{width: 100+"%", "borderRadius":16+"px"}} alt="Banner trabajos libres"/>
  )
}
