import React from "react";
import { Row, Col } from "react-bootstrap";
import BuddhaImage from "../assets/Buddha.jpg";
import JesusImage from "../assets/Jesus.jpg";
import PlatoImage from "../assets/Plato.jpg";
import MarcusAureliusImage from "../assets/MarcusAurelius.jpg";
import LaoTzuImage from "../assets/LaoTzu.jpg";
import HermesTrismegistusImage from "../assets/HermesTrismegistus.jpg";
import RumiImage from "../assets/Rûmî.jpg";
import AlanWattsImage from "../assets/AlanWatts.jpg";

function MasterAvatars({ handleClick }) {
  const mastersList = [
    "Buddha",
    "Jesus",
    "Plato",
    "Stoics",
    "Lao-Tzu",
    "Hermes Tri.",
    "Rûmî",
    "Alan Watts",
  ];

  const mastersImages = [
    BuddhaImage,
    JesusImage,
    PlatoImage,
    MarcusAureliusImage,
    LaoTzuImage,
    HermesTrismegistusImage,
    RumiImage,
    AlanWattsImage,
  ];

  return (
    <Row>
      <Col className="col-1 col-xl-3"></Col>
      <Col className="align-items-center col-10 col-xl-6">
        <h1 className="choose">Choose your spiritual master(s)</h1>
        <Row>
          {mastersList.map((master, index) => (
            <Col key={index} className="col-6 col-xl-3">
              <div className="card master-card">
                <img
                  onClick={handleClick}
                  className="master-image"
                  src={mastersImages[index]}
                  alt={master}
                />
                <div className="card-body">
                  <p className="card-title master-name">{master}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default MasterAvatars;
