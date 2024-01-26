import ItemsListContainer from "../components/ItemListContainer/ItemListContainer";

export function generateMetadata({ searchParams }) {
  const { search } = searchParams;

  return {
    title: `${search} | MercadoLibre 📦`,
    description: `✓ Comprá ${search} - Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
  };
}

export default function Items({ searchParams }) {
  return (
    <section>
      <ItemsListContainer searchParams={searchParams} />
    </section>
  );
}
