import React from "react";
import ChevronRightIcon from "../../assets/iconsComponent/ChevronRightIcon.jsx";
import "./Breadcrumb.scss";

export default function Breadcrumb({ categories }) {
  return (
    <ol className="breadcrumb__container">
      {categories.map((category, index) => (
        <li key={index} className="breadcrumb__category--container">
          <p className="breadcrumb__category--value">{category}</p>
          <ChevronRightIcon className="breadcrumb__category--separator" />
        </li>
      ))}
    </ol>
  );
}
