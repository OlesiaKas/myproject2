import React, { useContext, useState } from "react";

import { Form, Col, Row, Spinner } from "react-bootstrap";
import { cfg } from "../../cfg/cfg";

import ReviewCard from "../ReviewCard/ReviewCard";
import { AppContext } from "../../context/AppContext";
import Button from "../Buttons/Buttons";

import "./reviews.scss";

function Reviews() {
  const { data } = useContext(AppContext);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    console.log("submitted");

    try {
      setLoading(true);
      const datar = {
        title,
        description,
      };
      console.log("datar", datar);
      const response = await fetch(`${cfg.API.HOST}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datar),
      });
      console.log("response", response);
      const review = await response.json();
      console.log("data", review);
    } catch (error) {}
  };

  return (
    <>
      <main className="main-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Vardas</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Vardas"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button style={{ marginTop: "2rem" }} type="gold" disabled={loading}>
            Pridėti atsiliepimą
          </Button>
          {loading && <Spinner animation="border" variant="secondary" />}
        </Form>
      </main>
      <div className="reviews-container">
        {data.map((item) => (
          <ReviewCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Reviews;
