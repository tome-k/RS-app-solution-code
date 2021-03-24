import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

// import marcus from "../assets/marcus_aurelius.jpg";
// import epictetus from "../assets/epictetus.jpg";
import seneca from "../assets/seneca_br.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="cards">
        <Link href="#" className="card">
          <img src={seneca} alt="" />
          <div className="card__content">
            <div className="card__title">Marcus Aurelius</div>
            <div className="card__snippet">
              Seneca was born in Cordoba in Hispania, and raised in Rome, where
              he was trained in rhetoric and philosophy. His father was Seneca
              the Elder, his elder brother was Lucius Junius Gallio Annaeanus,
              and his nephew was the poet Lucan. In AD 41, Seneca was exiled to
              the island of Corsica under emperor Claudius, but was allowed to
              return in 49 to become a tutor to Nero.
            </div>
            <div className="card__read">Read More</div>
          </div>
        </Link>
        <Link href="#" className="card">
          <img src={seneca} alt="" />
          <div className="card__content">
            <div className="card__title">Epictetus</div>
            <div className="card__snippet">
              Seneca was born in Cordoba in Hispania, and raised in Rome, where
              he was trained in rhetoric and philosophy. His father was Seneca
              the Elder, his elder brother was Lucius Junius Gallio Annaeanus,
              and his nephew was the poet Lucan. In AD 41, Seneca was exiled to
              the island of Corsica under emperor Claudius, but was allowed to
              return in 49 to become a tutor to Nero.
            </div>
            <div className="card__read">Read More</div>
          </div>
        </Link>
        <Link href="#" className="card">
          <img src={seneca} alt="" />
          <div className="card__content">
            <div className="card__title">Seneca</div>
            <div className="card__snippet">
              Seneca was born in Cordoba in Hispania, and raised in Rome, where
              he was trained in rhetoric and philosophy. His father was Seneca
              the Elder, his elder brother was Lucius Junius Gallio Annaeanus,
              and his nephew was the poet Lucan. In AD 41, Seneca was exiled to
              the island of Corsica under emperor Claudius, but was allowed to
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
