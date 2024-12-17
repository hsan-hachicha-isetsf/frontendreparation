import React from 'react'
import Menu from './componant/Menu'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listclients from './componant/clients/Listclients';
import Insertclient from './componant/clients/Insertclient';

import Listdemandesrep from './componant/demandesreparation/Listdemandesrep';
import FicheReparation from './componant/FicheReparation';
import FicheTechnicien from './componant/FicheTechnicien';
const App = () => {
  return (
    <div>
      <Router>
         <Menu/>
          <Routes>
            <Route path="/client" element={<Listclients/>}/>
            <Route path="/client/add" element={<Insertclient/>}/>
            <Route path="/reparation" element={<FicheReparation/>} />
            <Route path='/fichedemrep' element={<Listdemandesrep/>}/>
            <Route path="/Technicien" element={<FicheTechnicien />} />
          </Routes>
        </Router>
   
    </div>
  )
}

export default App
