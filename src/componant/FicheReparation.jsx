import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";
import './style.css';

const FicheReparation = () => {
  const navigate = useNavigate();
  const [reparation, setReparation] = useState({
    dateDepotAppareil: '',
    datePrevueReparation: '',
    etat: '',
    symptomesPanne: '',
    appareilId: '',
    id_client: '',
  });
  const [appareils, setAppareils] = useState([]);
  const [clients, setClients] = useState([]);
  const [appareil,setAppareil]=useState({})

  const fetchClient = async () => {
    try {
      const res = await axios.get('http://localhost:8080/Clients/');
      setClients(res.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des clients:', error);
    }
  };

  const fetchAppareil = async () => {
    try {
      const res = await axios.get('http://localhost:8080/App/');
      setAppareils(res.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des appareils:', error);
    }
  };

  useEffect(() => {
    fetchClient();
    fetchAppareil();
  }, []);

  
  

  // Méthode pour Enregistrer un article dans la base de données
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/Demande/', reparation);
      const doc = new jsPDF({
        orientation: 'landscape', // Orientation paysage
        unit: 'in',
        format: [6, 4], // Format de 4x2 pouces
      });
  
      // Titre du ticket
      doc.setFontSize(14);
      doc.text('Ticket de Réparation', 1, 0.5);
  
      // Ajouter les détails du formulaire
      doc.setFontSize(10);
      doc.text(`Date Dépôt : ${reparation.dateDepotAppareil}`, 1, 1);
      doc.text(`Date Prévue : ${reparation.datePrevueReparation}`, 1, 1.3);
      doc.text(`État : ${reparation.etat}`, 1, 1.6);
      doc.text(`Symptômes : ${reparation.symptomesPanne}`, 1, 1.9);
      doc.text(`Appareil : ${reparation.appareilId}`, 1, 2.2);
      doc.text(`Client : ${reparation.id_client}`, 1, 2.5);
  
      // Sauvegarde du fichier
      doc.save('ticket-reparation.pdf');
      navigate('/fichedemrep');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
    }
  };

 
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center>
        <h2>Insertion Demande</h2>
      </center>
      <Form>
        <Row className="mb-2">
          <Form.Group as={Col} md="6">
            <Form.Label>Date dépôt appareil</Form.Label>
            <Form.Control
              type="date"
              value={reparation.dateDepotAppareil}
              onChange={(e) =>
                setReparation({ ...reparation, dateDepotAppareil: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Date prévue réparation</Form.Label>
            <Form.Control
              type="date"
              value={reparation.datePrevueReparation}
              onChange={(e) =>
                setReparation({ ...reparation, datePrevueReparation: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} md="6">
            <Form.Label>État</Form.Label>
            <Form.Control
              type="text"
              value={reparation.etat}
              onChange={(e) => setReparation({ ...reparation, etat: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Symptômes Panne</Form.Label>
            <Form.Control
              type="text"
              value={reparation.symptomesPanne}
              onChange={(e) =>
                setReparation({ ...reparation, symptomesPanne: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} md="6">
            <Form.Label>Appareil</Form.Label>
            <Form.Control
              as="select"
              value={reparation.appareilId}
              onChange={(e) => setReparation({ ...reparation, appareilId: e.target.value })}
            >
              <option>Choisir un appareil</option>
              {appareils.map((ap, index) => (
                <option value={ap.appareilId} key={index}>
                  {ap.marque}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Client</Form.Label>
            <Form.Control
              as="select"
              value={reparation.id_client}
              onChange={(e) => setReparation({ ...reparation, id_client: e.target.value })}
            >
              <option>Choisir un client</option>
              {clients.map((cl, index) => (
                <option value={cl.id_client} key={index}>
                  {cl.nom}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={(e) => handleSave(e)}
        >
          <i class="fa-solid fa-print"></i> Imprimer
        </button>
        &nbsp;
        <Link to="/client">
          <button type="button" className="btn btn-danger btn-sm">
            <i className="fa-solid fa-circle-xmark"></i> Annuler
          </button>
          </Link>
         
       
      </Form>
              
      
      <div>
    
  </div>
      
    </div>
  );
};

export default FicheReparation;
