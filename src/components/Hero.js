import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

import marcus from "../assets/marcus-aurelius2.jpg";
import epictetus from "../assets/epiciteus-2.jpg";
import seneca from "../assets/seneca_br.jpg";

function Hero() {
  return (
    <div className="hero" id="hero">
      <h1>"Heroes of Stoicism"</h1>
      <h3>profiles and biographies </h3>
      <hr />
      <div className="cards">
        <Link to="/" className="card">
          <img src={marcus} alt="" />
          <div className="card__content">
            <div className="card__title">Marcus Aurelius</div>
            <div className="card__snippet">
              <strong>Marcus Aurelius Antoninus</strong> 26 April 121 – 17 March
              180 was Roman emperor from 161 to 180 and a Stoic philosopher. He
              was the last of the rulers known as the Five Good Emperors (a term
              coined some 13 centuries later by Niccolò Machiavelli), and the
              last emperor of the Pax Romana (27 BC to 180), an age of relative
              peace and stability for the Roman Empire. He served as Roman
              consul in 140, 145, and 161. Marcus was born during the reign of
              Hadrian to the emperor's nephew, the praetor Marcus Annius Verus,
              and the heiress Domitia Calvilla.
            </div>
            <div className="card__read">Read More</div>
          </div>
        </Link>
        <Link to="/" className="card">
          <img src={epictetus} alt="" />
          <div className="card__content">
            <div className="card__title">Epictetus</div>
            <div className="card__snippet">
              <strong>Epictetus</strong> c. 50 – c. 135 AD was a Greek Stoic
              philosopher. He was born a slave at Hierapolis, Phrygia and lived
              in Rome until his banishment, when he went to Nicopolis in
              northwestern Greece for the rest of his life. Epictetus taught
              that philosophy is a way of life and not just a theoretical
              discipline. To Epictetus, all external events are beyond our
              control; we should accept whatever happens calmly and
              dispassionately. However, individuals are responsible for their
              own actions, which they can examine and control through rigorous
              self-discipline.
            </div>
            <div className="card__read">Read More</div>
          </div>
        </Link>
        <Link to="/" className="card">
          <img src={seneca} alt="" />
          <div className="card__content">
            <div className="card__title">Seneca</div>
            <div className="card__snippet">
              <strong>Lucius Annaeus Seneca </strong>the Younger usually known
              as Seneca, was a Roman Stoic philosopher, statesman, dramatist,
              and in one work, satirist from the Silver Age of Latin literature.
              Seneca was born in Cordoba in Hispania, and raised in Rome, where
              he was trained in rhetoric and philosophy. His father was Seneca
              the Elder, his elder brother was Lucius Junius Gallio Annaeanus,
              and his nephew was the poet Lucan. In AD 41, Seneca was exiled to
              the island of Corsica under emperor Claudius,but was allowed to
              return in 49 to become a tutor to Nero.
            </div>
            <div className="card__read">Read More</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
