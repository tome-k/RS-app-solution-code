import React from "react";
import "./Hero.scss";
import img_1 from "../assets/zenon2.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text-wrapper">
          <h2>Philosophy of stoicism</h2>
          <p>
            <strong>Stoicism </strong>is a school of Hellenistic philosophy
            founded by Zeno of Citium in Athens in the early 3rd century BC. It
            is a philosophy of personal ethics informed by its system of logic
            and its views on the natural world. According to its teachings, as
            social beings, the path to eudaimonia (happiness, or blessedness) is
            found in accepting the moment as it presents itself, by not allowing
            oneself to be controlled by the desire for pleasure or by the fear
            of pain, by using one's mind to understand the world and to do one's
            part in nature's plan, and by working together and treating others
            fairly and justly.
          </p>
          <p>
            The Stoics are especially known for teaching that "virtue is the
            only good" for human beings, and those external things—such as
            health, wealth, and pleasure—are not good or bad in themselves
            (adiaphora), but have value as "material for virtue to act upon."
            Alongside Aristotelian ethics, the Stoic tradition forms one of the
            major founding approaches to virtue ethics.The Stoics also held that
            certain destructive emotions resulted from errors of judgment, and
            they believed people should aim to maintain a will (called
            prohairesis) that is "in accordance with nature." Because of this,
            the Stoics thought the best indication of an individual's philosophy
            was not what a person said but how a person behaved.To live a good
            life, one had to understand the rules of the natural order since
            they thought everything was rooted in nature.
          </p>
          <p>
            Many Stoics—such as Seneca and Epictetus—emphasized that because
            "virtue is sufficient for happiness," a sage would be emotionally
            resilient to misfortune. This belief is similar to the meaning of
            the phrase "stoic calm," though the phrase does not include the
            "radical ethical" Stoic views that only a sage can be considered
            truly free and that all moral corruptions are equally vicious.
          </p>
        </div>
        <div className="hero__img-wrapper">
          <img src={img_1} alt="Zenon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
