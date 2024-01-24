"use client";

import { useFetch } from "../customHooks/useFetch";
import Loading from "../components/Loading/Loading";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemsListContainer from "../components/ItemsListContainer/ItemsListContainer";

export default function Items({ searchParams }) {
  const { search } = searchParams;
  const { data, loading } = useFetch(`http://localhost:3001/api/items?q=${search}&limit=4`);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="visually--hidden">{search}</h1>
          <Breadcrumb categories={data.categories} />
          <ItemsListContainer itemsList={data.items} />
        </>
      )}
    </section>
  );
}
