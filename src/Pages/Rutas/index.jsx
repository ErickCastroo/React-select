import React from 'react'
import {BrowserRouter, useRoutes} from 'react-router-dom'

//paginas importadas
import {Home} from '../Home'
import {CreateSelect} from '../createPage'

//componentes importados

function Rutas() {
  //Rutas 
  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: '/',
          //asignamos el usuario desde el login
        element:<Home/>
      },

      {
        /*La URL en la que accede la pagina*/
        path: '/createSelect',
      
        element:<CreateSelect/>
      },
      {
        path: '*',
        element: <Home/>
      },
  
    ])
  
    return routes
  }




  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export { Rutas } 