import React from "react";
import "./ErrorFetch.scss";

export default function ErrorFetch({ message }) {
  return <h1 className="error-message">{`${message}`}</h1>;
}
