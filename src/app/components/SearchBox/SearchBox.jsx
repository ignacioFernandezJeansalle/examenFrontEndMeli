import Image from "next/image";
import searchIcon from "../../assets/icons/SearchIcon.webp";
import "./SearchBox.scss";

export default function SearchBox() {
  return (
    <form className="form-search" action="/items">
      <label className="form-search__label" htmlFor="search">
        Ingresá lo que quieras buscar
      </label>
      <input
        className="form-search__input"
        type="text"
        id="search"
        name="search"
        placeholder="Nunca dejes de buscar..."
        maxLength="120"
        spellCheck="false"
        autoComplete="off"
        required
      />
      <button className="form-search__button" type="submit">
        <Image className="form-search__button-icon" src={searchIcon} alt="Icono de búsqueda" />
      </button>
    </form>
  );
}
