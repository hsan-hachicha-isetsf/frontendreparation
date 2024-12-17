import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Nom client</td>
            <td>Adresse client</td>
            <td>Email client</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((cl,index)=>
            <tr key={index}>
                <td>{cl.nom}</td>
                <td>{cl.adresse}</td>
                <td>{cl.email}</td>
                <td><button className='btn btn-warning btn-sm'> <i class="fa-solid fa-pen-to-square"></i> Update</button></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(cl.id_client)}><i class="fa-solid fa-trash"></i> Delete</button></td>
            </tr>
            
            
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Listclients
