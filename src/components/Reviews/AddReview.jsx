import React, { useContext, useState } from "react";
import { Form, Col, Row, Spinner, Container, Alert } from "react-bootstrap";
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
    value: null,
    message: "",
  });

  const { fetchData } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;

    if (!form.checkValidity()) return;
    console.log("submitted");

    try {
      setLoading(true);

      const data = {
        title,
        description,
      };
      console.log("data", data);
      const response = await fetch(`${cfg.API.HOST}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);
      const review = await response.json();

      if (!response.ok) {
        throw new Error(review.message);
      }
      console.log("data", review);
      setStatus({ value: "success", message: "Atsiliepimas išsaugotas" });
      fetchData();
    } catch (error) {
      setStatus({
        value: "danger",
        message: error.message || "Nepavyko išsaugoti atsiliepimo",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="reviews-container">
      <Container>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Vardas</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Vardas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Title is required!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Atsiliepimas</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Atsiliepimas"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Description is required!
              </Form.Control.Feedback>
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
