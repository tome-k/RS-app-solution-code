import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound({ title }) {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404 Page Not Found!</h2>
        <p className="not-found__desc">That page cannot be found</p>
        <p className="not-found__desc">Check out the url address</p>
        <Link className="not-found__link" to="/">
          Go Back to Home page
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
