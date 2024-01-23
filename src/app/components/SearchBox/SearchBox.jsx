import Image from "next/image";
import searchIcon from "../../assets/icons/SearchIcon.webp";

import "./SearchBox.scss";

export default function SearchBox() {
  return (
    <form className="form-search" action="/items">
      <label className="search-label" htmlFor="search">
        Ingresá lo que quieras buscar
      </label>
      <input
        className="search-input"
        type="text"
        id="search"
        name="search"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        spellCheck="false"
        autoComplete="off"
        required
      />
      <button className="search-button" type="submit">
        <Image className="search-button-icon" src={searchIcon} alt="Icono de búsqueda" />
      </button>
    </form>
  );
}
