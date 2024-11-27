import { createRoot } from 'react-dom/client'
import './styles/body.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render( 
    <UserContextProvider>
            <RouterProvider router={router} />
    </UserContextProvider> )

