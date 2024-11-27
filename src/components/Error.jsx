import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='flex jc-c ai-c h-100 mt-minus-50'>
        <div>
            <h1>Ocurrió un error</h1>
            <p> Por favor intentelo más tarde.</p>
            <Link to="/"> Volver a la página principal </Link>
        </div>
    </div>
  )
}

export default Error
