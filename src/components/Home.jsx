import React from 'react'
import image from "../assets/rings-image.jpeg"

function Home() {
  return (
    <>
    <div className='flex jc-c'>
        <div>
            <h1>Tienda oficial de Ani's Jewerlies</h1>
            <h3>Bienvenidx a la págin oficial de nuestra tienda.</h3>
            <p>En esta página encontraras una variedad de joyas con precios increíbles.</p>
            <p>A continuación te invitamos iniciar seción para poder visualizar los productos y sus detalles</p>
        </div>
    </div>
        <div className='flex jc-c'>
            <img src={image} alt="Rings image" title="Rings image" />
        </div>
    </>
  )
}

export default Home