import React, { useContext, useState } from "react";

import { Form, Col, Row, Spinner, Container } from "react-bootstrap";
import { cfg } from "../../cfg/cfg";

import ReviewCard from "../ReviewCard/ReviewCard";
import { AppContext } from "../../context/AppContext";
import Button from "../Buttons/Buttons";

import "./reviews.scss";

function Reviews() {
  const { data } = useContext(AppContext);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [RevTitle, setRevTitle] = useState("");
  const [RevName, setRevName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    console.log("submitted");

    try {
      setLoading(true);
      const data = {
        RevTitle,
        RevName,
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
      console.log("data", review);
    } catch (error) {}
  };

  return (
    <>
      <div className="rev-container">
        <div className="my-container">
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>Vardas</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Vardas"
                    value={RevTitle}
                    onChange={(e) => setRevTitle(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="validationCustom02">
                  <Form.Label>Atsiliepimas</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Atsiliepimas"
                    value={RevName}
                    onChange={(e) => setRevName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button
                style={{ marginTop: "2rem" }}
                type="gold"
                disabled={loading}
              >
                Pridėti atsiliepimą
              </Button>
              {loading && <Spinner animation="border" variant="secondary" />}
            </Form>
          </Container>
        </div>
      </div>
      <div className="reviews-container">
        {data.map((item) => (
          <ReviewCard
            key={item.id}
            title={item.RevTitle}
            description={item.RevName}
          />
        ))}
      </div>
    </>
  );
}

export default Reviews;
