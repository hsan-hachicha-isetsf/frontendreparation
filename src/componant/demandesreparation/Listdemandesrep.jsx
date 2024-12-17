import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Affichedemanderep from './Affichedemanderep'


const Listdemandesrep = () => {
    const[demandesrep,setDemandesrep]=useState([])
  const fetchdemanderep=async()=>{
    const res=await axios.get("http://localhost:8080/Demande/")
      setDemandesrep(res.data)
      
  }
  useEffect(()=>{
    fetchdemanderep()
  },[])
  const handleDelete=async(num_demande)=>{
    if(window.confirm("Supprimer Demande Reparation O/N")){
    await axios.delete(`http://localhost:8080/DemandeReparation/${num_demande}`)
    .then(res=>{
      console.log("Demande supprimé avec success")
    })
  }
}
  return (
    <div>
     <Link to="/reparation"> <button className='btn btn-success btn-sm'><i class="fa-solid fa-square-plus"></i> Ajout Demande</button></Link>
      <Affichedemanderep demandesrep={demandesrep}/>
    </div>
  )
}

export default Listdemandesrep
