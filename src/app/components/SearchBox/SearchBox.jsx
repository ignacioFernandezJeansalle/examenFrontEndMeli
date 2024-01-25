"use client";
import { useRef } from "react";
import Image from "next/image";
import searchIcon from "../../assets/icons/SearchIcon.webp";
import "./SearchBox.scss";

export default function SearchBox() {
  const inputSearch = useRef(null);

  const handleSubmit = (e) => {
    if (inputSearch.current.value === "") {
      e.preventDefault();
      inputSearch.current.focus();
    }
  };

  return (
    <form id="id-form-search" className="form-search" action="/items" onSubmit={handleSubmit}>
      <label id="id-form-label-input" className="form-search__label" htmlFor="id-form-input">
        Ingresá lo que quieras buscar
      </label>
      <input
        id="id-form-input"
        ref={inputSearch}
        className="form-search__input"
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        spellCheck="false"
        autoComplete="off"
      />
      <button id="id-form-button" className="form-search__button" type="submit">
        <Image className="form-search__button--icon" src={searchIcon} alt="Icono de búsqueda" />
      </button>
    </form>
  );
}
