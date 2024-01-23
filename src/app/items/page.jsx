"use client";

import { useFetch } from "../customHooks/useFetch";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemsList from "../components/ItemsList/ItemsList";

export default function Items({ searchParams }) {
  const { search } = searchParams;
  const { data, loading } = useFetch(`http://localhost:3001/api/items?q=${search}&limit=4`);

  return (
    <section>
      {loading ? (
        <h1>CARGANDO</h1>
      ) : (
        <>
          <h1>{search}</h1>
          <Breadcrumb />
          <ItemsList itemsList={data.items} />
        </>
      )}
    </section>
  );
}
