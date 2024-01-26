"use client";

import { useFetch } from "../../customHooks/useFetch";
import ErrorFetch from "../ErrorFetch/ErrorFetch";
import Loading from "../Loading/Loading";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ItemsList from "../ItemsList/ItemsList";

export default function ItemsListContainer({ searchParams }) {
  const { search } = searchParams;
  const { data, loading, error } = useFetch(`http://localhost:3001/api/items?q=${search}&limit=4`);

  return (
    <>
      {error && <ErrorFetch message={error} />}
      {loading && <Loading />}
      {data && (
        <>
          <h1 className="visually--hidden">{search}</h1>
          <Breadcrumb categories={data.categories} />
          <ItemsList itemsList={data.items} />
        </>
      )}
    </>
  );
}
