"use client";

import { useFetch } from "../../customHooks/useFetch";
import ErrorFetch from "../ErrorFetch/ErrorFetch";
import Loading from "../Loading/Loading";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ params }) {
  const { id } = params;
  const { data, loading, error } = useFetch(`http://localhost:3001/api/items/${id}`);

  return (
    <>
      {error && <ErrorFetch message={error} />}
      {loading && <Loading />}
      {data && (
        <>
          <h1 className="visually--hidden">{data.item.title}</h1>
          <Breadcrumb categories={data.categories} />
          <ItemDetail item={data.item} />
        </>
      )}
    </>
  );
}
