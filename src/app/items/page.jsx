"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemsList from "../components/ItemsList/ItemsList";

export default function Items({ searchParams }) {
  const { search } = searchParams;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
  const JSON = {
    author: {
      name: "Ignacio",
      lastname: "Fernández Jeansalle",
    },
    categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
    items: [
      {
        id: "MLA1401249643",
        title: "Apple iPhone 12 (128 Gb) - Negro - Distribuidor Autorizado",
        price: {
          currency: "ARS",
          amount: 1319999,
          decimals: 34,
        },
        picture: "http://http2.mlstatic.com/D_743195-MLA45719932493_042021-I.jpg",
        condition: "new",
        free_shipping: true,
      },
      {
        id: "MLA1474383632",
        title: " iPhone 6s 32 Gb Gris Espacial",
        price: {
          currency: "USD",
          amount: 239999,
          decimals: 0,
        },
        picture: "http://http2.mlstatic.com/D_898290-MLA31003118647_062019-I.jpg",
        condition: "newnew",
        free_shipping: false,
      },
      {
        id: "MLA1474383632",
        title: " iPhone 6s 32 Gb Gris Espacial",
        price: {
          currency: "ARS",
          amount: 239999,
          decimals: 0,
        },
        picture: "http://http2.mlstatic.com/D_898290-MLA31003118647_062019-I.jpg",
        condition: "newnew",
        free_shipping: true,
      },
      {
        id: "MLA1474383632",
        title: " iPhone 6s 32 Gb Gris Espacial",
        price: {
          currency: "ARS",
          amount: 239999,
          decimals: 0,
        },
        picture: "http://http2.mlstatic.com/D_898290-MLA31003118647_062019-I.jpg",
        condition: "Reacondicionado",
        free_shipping: true,
      },
    ],
  };
  */

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/items?q=${search}&limit=4`).then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  return (
    <section>
      {loading ? (
        <h1>CARGANDO</h1>
      ) : (
        <>
          <h1>Lo que se ingreso por el input - No visible</h1>
          <Breadcrumb />
          <ItemsList itemsList={data.items} />
        </>
      )}
    </section>
  );
}
