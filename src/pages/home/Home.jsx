import React, { useEffect, useState } from "react";
import { Container, Col, Card, Row,Button  } from "react-bootstrap";


import { useNavigate } from "react-router-dom";

import axios from "axios";

const Home = () => {

const navigate = useNavigate();

  const [ülkeler, setUlkeler] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const veriGetir = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      setUlkeler(res.data);
    };
    veriGetir();
  }, []);

  console.log(setUlkeler);

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <Container className="text-center mt-4 p-4 ">
      <Row className="g-3">
      {ülkeler.map((a,id) => {
        return (
          <Col sm={12} md={6} lg={4} key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={a.flags.png} />
              <Card.Body>
                <Card.Title>{a.name.common}</Card.Title>
                <Button
                  variant="danger"
                  onClick={() => navigate(`/Details/${a.name.common}`)}
                >
                  DETAYLAR
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
        })}
      </Row>
    </Container>
  );
};

export default Home;
