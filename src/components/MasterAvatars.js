import React from "react";
import { Row, Col } from "react-bootstrap";
import BuddhaImage from "../assets/Buddha.jpg";
import JesusImage from "../assets/Jesus.jpg";
import PlatoImage from "../assets/Plato.jpg";
import MarcusAureliusImage from "../assets/MarcusAurelius.jpg";
import LaoTzuImage from "../assets/LaoTzu.jpg";
import ShankaraImage from "../assets/Shankara.jpg";
import HermesTrismegistusImage from "../assets/HermesTrismegistus.jpg";
import NagarjunaImage from "../assets/Nagarjuna.jpg";
import RumiImage from "../assets/Rûmî.jpg";
import RamDassImage from "../assets/RamDass.jpg";
import AlanWattsImage from "../assets/AlanWatts.jpg";
import TerenceMcKennaImage from "../assets/TerenceMcKenna.jpg";

function MasterAvatars({ handleClick }) {
  const mastersList = [
    "Buddha",
    "Jesus",
    "Plato",
    "Marcus Aurelius",
    "Lao-Tzu",
    "Shankara",
    "Hermes Trismegistus",
    "Nagarjuna",
    "Rûmî",
    "Ram Dass",
    "Alan Watts",
    "Terence McKenna",
  ];

  const mastersImages = [
    BuddhaImage,
    JesusImage,
    PlatoImage,
    MarcusAureliusImage,
    LaoTzuImage,
    ShankaraImage,
    HermesTrismegistusImage,
    NagarjunaImage,
    RumiImage,
    RamDassImage,
    AlanWattsImage,
    TerenceMcKennaImage,
  ];

  return (
    <Row className="header">
      <Col className="col-1 col-xl-3"></Col>
      <Col className="align-items-center col-10 col-xl-6">
        <h5 className="page-title">Choose your spiritual master(s):</h5>
        <Row>
          {mastersList.map((master, index) => (
            <Col key={index} className="col-4 col-xl-3">
              <div className="card master-card">
                <img
                  onClick={handleClick}
                  className="master-image"
                  src={mastersImages[index]}
                  alt={master}
                />
                <div className="card-body">
                  <p className="card-text master-name">{master}</p>
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
