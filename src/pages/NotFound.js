import React from "react";
import "./NotFound.scss";
import { GiIonicColumn, GiAncientColumns } from "react-icons/gi";

function NotFound({ title }) {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <GiIonicColumn className="not-found__icon" />
        <h2 className="not-found__title">404 Page Not Found!</h2>
        <p className="not-found__desc">That page cannot be found</p>
        <p className="not-found__desc">Check out the url address</p>
        <a className="not-found__link" href="/">
          Go Back to Home page
        </a>
        <GiAncientColumns className="not-found__icon" />
      </div>
    </section>
  );
}

export default NotFound;
