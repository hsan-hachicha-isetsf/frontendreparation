import React, { useContext } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { DataContext } from "./DataContext";

function Facture() {
  const { clientData, machineData } = useContext(DataContext);

  // Données des articles et le taux de TVA
  const items = [
    { description: 'Réparation imprimante', quantity: 1, unitPrice: 100 },
    { description: 'Changement de cartouche', quantity: 2, unitPrice: 50 },
  ];
  const taxRate = 0.2;

  // Calculer les totaux directement
  const totalHT = items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  const totalTax = totalHT * taxRate;
  const totalTTC = totalHT + totalTax;

  return (
    <Container
      className="my-5"
      style={{
        backgroundImage:
          'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAfEAEBAQEAAwADAQEAAAAAAAAAARECITFBElFxA2H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+l/58+Y9PMkjl/ny788g1w0eZDIBkawHQSEqAs2mjAUX0EDq0IEYsQNQswgUNIFJAV8BAYK0zQYsc+47Yx1AcLE3faBy5/jrzGOY68gZGh8QIszToFAwElqAYZEoCqiQI1KgviIAxKIDpCAqCECKiDLHTpWKDniaAOfMdIzI3APxCACJV8IJaLTANQIEK1ACIQRBgKGoAdSQHUygaQlMoGECewNFaZBhGoHLjw6Rz5bgKeLo9leoAq0WjQaqjMMoNIadAL4iAnloQgUNIJCi0DGmY0CSQJJAZcIQNM0wUBQkDjw1rnGwa3BaFQGteGPpAxBQG5APywS+QbhAgHSDAVqlSkBUYZCCjXgQgDrNWgSzplAoagangakCQQOEI5pBfVULQMTPNOg0ggVXMHS5oNoaLQajWucpl8g2oJSBQ1aBLK0F0hVAJgIEAwCahoBHYgeblty5dICFSoKe0IdBq+BqvlAKoKNoNwX2EBMBnsGo1rEptgNatZ1ToDq1m+UDVrOrVQalOswgmtZUB0lFo3wL/wABVMoHm5t/bpzfDlz03z0DatQAaWadBpb4Z1AYYxpnQNi1i9K0GtajnGoDUq1m1fkDfwy4woDduiUVQDFfaUAytawYBpgQNC39JjqgZ/LU57f2geTi678ft5eLj0cWZ7B2noKXwKAqQ+g0BpgDRqsUA/lTKEDSnsL6DVZ1UA3GtY1UGzLHOVrQahrErWgjrOmUG4mZVaCvTHVHVZ69AL1N9Jz0A8vNrvxakDtOrhlqQGJIFCkArMSBofUgKSBUVIGp6X2FAzy1fSQLWuvgQKVpIEz1akDNrHV8JA49e0kD/9k=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '70px',
        borderRadius: '30px',
      }}
    >
      <Row>
        <Col md={8}>
          <div className="invoice-header">
            <h1>RepAppBuro</h1>
            <p>Adresse de l'entreprise, Code Postal, Ville</p>
            <p>Email: contact@repappburo.com | Téléphone: +33 1 23 45 67 89</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="invoice-details">
            <h3>Facture</h3>
            <p>Numéro de facture: <strong>#12345</strong></p>
            <p>Date d'émission: <strong>{machineData.DateDepot}</strong></p>
            <p>Date d'échéance: <strong>{machineData.DatePrevu}</strong></p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="client-info">
            <h4>Client:</h4>
            <p><strong>Nom : {clientData.nomCLT}</strong></p>
            <p><strong>Téléphone :  {clientData.NumCLT} </strong></p>
            <p><strong>Email : {clientData.emailCLT}</strong></p>
          </div>
        </Col>

        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantité</th>
                <th>Prix Unitaire</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice} €</td>
                  <td>{item.quantity * item.unitPrice} €</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total HT</strong></td>
                <td colSpan="2"></td>
                <td><strong>{totalHT.toFixed(2)} €</strong></td>
              </tr>
              <tr>
                <td>TVA (20%)</td>
                <td colSpan="2"></td>
                <td>{totalTax.toFixed(2)} €</td>
              </tr>
              <tr>
                <td><strong>Total TTC</strong></td>
                <td colSpan="2"></td>
                <td><strong>{totalTTC.toFixed(2)} €</strong></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="footer text-center">
            <p>Merci pour votre confiance !</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Facture;
