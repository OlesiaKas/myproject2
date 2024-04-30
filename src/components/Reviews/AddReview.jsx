import React, { useContext, useState } from "react";
import { Form, Col, Row, Spinner, Alert, Container } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { cfg } from "../../cfg/cfg";

import Button from "../Buttons/Buttons";
import "./reviews.scss";
function AddReviews() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState({
    value: "success",
    message: "",
  });

  const { fetchData } = useContext(AppContext);
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    setValidated(true);

    if (!form.checkValidity()) return;

    try {
      setLoading(true);

      const data = {
        title,
        description,
      };

      const response = await fetch(`${cfg.API.HOST}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);
      const review = await response.json();

      if (!response.ok) throw new Error(review.error);

      console.log("data", review);
      setStatus({ value: "success", message: "Atsiliepimas išsaugotas" });
      fetchData();
    } catch (error) {}
  };

  return (
    <main className="container">
      <Container>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Vardas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Control
                required
                as="textarea"
                placeholder="Atsiliepimas"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button style={{ marginTop: "2rem" }} type="gold" disabled={loading}>
            Pridėti atsiliepimą
          </Button>
          {loading && <Spinner animation="border" variant="secondary" />}
        </Form>
      </Container>
    </main>
  );
}

export default AddReviews;
