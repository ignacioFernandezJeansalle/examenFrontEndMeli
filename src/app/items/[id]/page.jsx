"use client";

import { useFetch } from "../../customHooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

export default function ItemById({ params }) {
  const { id } = params;
  const { data, loading } = useFetch(`http://localhost:3001/api/items/${id}`);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Breadcrumb categories={data.categories} />
          <ItemDetail item={data.item} />
        </>
      )}
    </section>
  );
}
