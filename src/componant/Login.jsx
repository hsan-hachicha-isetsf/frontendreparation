import React from "react";
import { Container, Navbar, Col, Form, Button } from "react-bootstrap";


function Login() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#">RepAppBuro</Navbar.Brand>
        </Container>
      </Navbar>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          backgroundImage:
            'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAfEAEBAQEAAwADAQEAAAAAAAAAARECITFBElFxA2H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+l/58+Y9PMkjl/ny788g1w0eZDIBkawHQSEqAs2mjAUX0EDq0IEYsQNQswgUNIFJAV8BAYK0zQYsc+47Yx1AcLE3faBy5/jrzGOY68gZGh8QIszToFAwElqAYZEoCqiQI1KgviIAxKIDpCAqCECKiDLHTpWKDniaAOfMdIzI3APxCACJV8IJaLTANQIEK1ACIQRBgKGoAdSQHUygaQlMoGECewNFaZBhGoHLjw6Rz5bgKeLo9leoAq0WjQaqjMMoNIadAL4iAnloQgUNIJCi0DGmY0CSQJJAZcIQNM0wUBQkDjw1rnGwa3BaFQGteGPpAxBQG5APywS+QbhAgHSDAVqlSkBUYZCCjXgQgDrNWgSzplAoagangakCQQOEI5pBfVULQMTPNOg0ggVXMHS5oNoaLQajWucpl8g2oJSBQ1aBLK0F0hVAJgIEAwCahoBHYgeblty5dICFSoKe0IdBq+BqvlAKoKNoNwX2EBMBnsGo1rEptgNatZ1ToDq1m+UDVrOrVQalOswgmtZUB0lFo3wL/wABVMoHm5t/bpzfDlz03z0DatQAaWadBpb4Z1AYYxpnQNi1i9K0GtajnGoDUq1m1fkDfwy4woDduiUVQDFfaUAytawYBpgQNC39JjqgZ/LU57f2geTi678ft5eLj0cWZ7B2noKXwKAqQ+g0BpgDRqsUA/lTKEDSnsL6DVZ1UA3GtY1UGzLHOVrQahrErWgjrOmUG4mZVaCvTHVHVZ69AL1N9Jz0A8vNrvxakDtOrhlqQGJIFCkArMSBofUgKSBUVIGp6X2FAzy1fSQLWuvgQKVpIEz1akDNrHV8JA49e0kD/9k=)',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            border: "1px solid #ccc",
          }}
        >
          <h2 className="mb-4 text-center">Login</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" name="login" placeholder="Login" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="motdepass"
                placeholder="Mot de passe"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Connecter
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Login;
