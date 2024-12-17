import axios from 'axios';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
const Insertclient = () => {
    const navigate=useNavigate()
    const[client,setClient]=useState({})


//Méthode pour Enregistrer un article dans la base de données
const handleSave=async(e)=>{
    try {
        console.log(client)
    e.preventDefault()
    await axios.post("http://localhost:8080/Clients/",client)

    .then(res=>{
    navigate("/client")
    })
    } catch (error) {
    console.log(error)
    }
    }

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<center><h2>Insertion Client</h2></center>
<Form>
<Row className="mb-2">
<Form.Group as={Col} md="8" >
<Form.Label>Nom client</Form.Label>
<Form.Control
type="text"
placeholder="Nom"
value={client.nom}
onChange={(e)=>setClient({...client,nom:e.target.value})}
/>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group as={Col} md="8" >
<Form.Label>Email client</Form.Label>
<Form.Control
type="email"
placeholder="Email"
value={client.email}
onChange={(e)=>setClient({...client,email:e.target.value})}
/>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group as={Col} md="8" >
<Form.Label>Adresse client</Form.Label>
<Form.Control
type="text"
placeholder="Adresse"
value={client.adresse}
onChange={(e)=>setClient({...client,adresse:e.target.value})}
/>
</Form.Group>
</Row>

<button className='btn btn-success btn-sm'
onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregistrer</button>
&nbsp;
<Link to="/client"> <button className='btn btn-danger btnsm'><i class="fa-solid fa-circle-xmark"></i> Annuler</button></Link>
</Form>
</div>
  )
}

export default Insertclient
