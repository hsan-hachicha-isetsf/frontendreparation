import React from "react";
import { Container, Row, Col, Card, Button, Form, Navbar } from "react-bootstrap"; // Correction de 'form' en 'Form'
import { useNavigate } from "react-router-dom"; // Pour gérer la navigation

function FicheTechnicien() {
 
  return (
    <>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h2>Fiche Technicien</h2></center>
    
        
          <Col md={8}>
          

            {/* Formulaire pour la marque */}
            <Form>
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formNomClient">
                  <Form.Label>Marque</Form.Label>
                  <Form.Control type="text" id="marque" name="marque" placeholder="Marque" />
                </Form.Group>
              </Col>

              {/* Formulaire pour le modèle */}
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formModele">
                  <Form.Label>Modèle</Form.Label>
                  <Form.Control type="text" id="modele" name="modele" placeholder="Modèle" />
                </Form.Group>
              </Col>
             

              {/* Formulaire pour le type de problème */}
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formTypeProbleme">
                  <Form.Label>Type de problème</Form.Label>
                  <Form.Control type="text" id="TypeProbleme" name="TypeProbleme" placeholder="Problème" />
                </Form.Group>
              </Col>
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formTypeProbleme">
                  <Form.Label>Description de la Panne</Form.Label>
                  <Form.Control type="text" id="Description" name="Description" placeholder="Description" />
                </Form.Group>
              </Col>
              <th>
              <td>
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formTypeProbleme">
                  <Form.Label>Piece de rechange</Form.Label>
                  <Form.Control type="text" id="Piece de rechange" name="Piece de rechange" placeholder="Piece de rechange" />
                </Form.Group>
              </Col></td>
              <td>
              <Col xs={10}>
                <Form.Group className="mb-3" controlId="formTypeProbleme">
                  <Form.Label>Tarif par heur</Form.Label>
                  <Form.Control type="text" id="Tarif par heure" name="Tarif par heure" placeholder="Tarif par heure" />
                </Form.Group>
              </Col></td>
            
              </th>
              {/* Bouton pour soumettre */}
              <Button variant="primary"type="submit" className="mt-3">
                Envoyer
              </Button>
            </Form>
          </Col>

          {/* Section des informations du client */}
          <Col md={4}>
            <h3>Informations du Client</h3>
            <p><strong>Nom :</strong> Client Name</p>
            <p><strong>Téléphone :</strong> Client Phone</p>
            <p><strong>Email :</strong> Client Email</p>
          </Col>
          </div>
     
    </>
  );
}

export default FicheTechnicien;
