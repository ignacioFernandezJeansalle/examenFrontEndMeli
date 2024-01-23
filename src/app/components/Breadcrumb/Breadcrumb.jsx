import React from "react";
import Image from "next/image";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon.svg";
import "./Breadcrumb.scss";

export default function Breadcrumb({ categories }) {
  return (
    <ol className="breadcrumb__container">
      {categories.map((category, index) => (
        <li key={index} className="breadcrumb__category">
          <p className="breadcrumb__category-value">{category}</p>
          <Image className="breadcrumb__category-separator" src={ChevronRightIcon} alt="Logo Mercado Libre" />
        </li>
      ))}
    </ol>
  );
}
