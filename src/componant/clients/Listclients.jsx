import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Afficheclient from './Afficheclient'

const Listclients = () => {

  const[clients,setClients]=useState([])
  const fetchClient=async()=>{
    const res=await axios.get("http://localhost:8080/Clients/")
      setClients(res.data)
      console.log(res.data)
  }
  useEffect(()=>{
    fetchClient()
  },[])
  const handleDelete=async(id_client)=>{
    if(window.confirm("Supprimer client O/N")){
    await axios.delete(`http://localhost:8080/Clients/${id_client}`)
    .then(res=>{
      console.log("client supprimé avec success")
    })
  }
  }
  return (
    <div>
     <Link to="/client/add"> <button className='btn btn-success btn-sm'><i class="fa-solid fa-square-plus"></i> Ajout</button></Link>
      <Afficheclient clients={clients}/>
    </div>
  )
}

export default Listclients
