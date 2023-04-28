import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomeScreen from '../home/HomeScreen'
import Employes from '../employes/Employes'
import Syntaxe from '../js/Syntaxe'
import Variables from '../js/Variables'
import Operators from '../js/Operators'
import Functions from '../js/Fonctions'
import Objects from '../js/Objects'
import Strings from '../js/Strings'
import Numbers from '../js/Numbers'
import Arrays from '../js/Arrays'
import Boucles from '../js/Boucles'
import SetMap from '../js/SetMap'
import Callbacks from '../js/Callbacks'
import Introduction from '../js/dom/Introduction'
import Modifier from '../js/dom/Modifier'
import Evenements from '../js/dom/Evenements'
import Login from '../login/Login'

export const RouteNavigation = () => {
  return (
    <Routes>
     
     <Route  path='/intro' element={<HomeScreen/>}  />
     <Route  path='/syntaxe' element={<Syntaxe/>}  />
     <Route  path='/variables' element={<Variables/>}  />
     <Route  path='/operators' element={<Operators/>}  />
     <Route  path='/functions' element={<Functions/>}  />
     <Route  path='/string' element={<Strings/>}  />
     <Route  path='/number' element={<Numbers/>}  />
     <Route  path='/object' element={<Objects/>}  />
     <Route  path='/array' element={<Arrays/>}  />
     <Route  path='/boucle' element={<Boucles/>}  />
     <Route  path='/setmap' element={<SetMap/>}  />
     <Route  path='/callback' element={<Callbacks/>}  />
     <Route  path='/introduction' element={<Introduction/>}  />
     <Route  path='/change' element={<Modifier/>}  />
     <Route  path='/events' element={<Evenements/>}  />
    </Routes>
  )
}

export default RouteNavigation