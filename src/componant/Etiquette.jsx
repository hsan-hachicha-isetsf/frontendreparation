import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";
import { Container, Navbar, Button } from "react-bootstrap";

function Etiquette() {
    const { clientData, machineData } = useContext(DataContext);
    const navigate = useNavigate();

    const handleFactureClick = () => {
        // Redirection vers la page facture avec les données dans l'état
        navigate("/facture", {
            state: {
                clientData,
                machineData,
            },
        });
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container>
                    <Navbar.Brand href="#">RepAppBuro</Navbar.Brand>
                </Container>
            </Navbar>

            <Container
               
            >
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '20px',
                        borderRadius: '8px',
                        maxWidth: '400px',
                        width: '100%',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        border: '1px solid #ccc',
                    }}
                >
                    <h1>Etiquette</h1>
                    <h3 style={{ fontSize: "1.8em" }}>Informations du Client</h3>
                    <p style={{ fontSize: "1.5em" }}>Nom : {clientData.nomCLT}</p>
                    <p style={{ fontSize: "1.5em" }}>Email : {clientData.emailCLT}</p>
                    <p style={{ fontSize: "1.5em" }}>Téléphone : {clientData.NumCLT}</p>

                    <h3 style={{ fontSize: "1.8em" }}>Informations de la Machine</h3>
                    <p style={{ fontSize: "1.5em" }}>Modèle : {machineData.modele}</p>
                    <p style={{ fontSize: "1.5em" }}>Numéro de Série : {machineData.NumSerie}</p>
                    <p style={{ fontSize: "1.5em" }}>Description : {machineData.TypeProbleme}</p>

                    <Button
                        variant="primary"
                        className="mt-3 me-2 custom-button"
                        onClick={handleFactureClick}
                    >
                        Facture
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        className="mt-3 custom-button"
                    >
                        Imprimer
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default Etiquette;
