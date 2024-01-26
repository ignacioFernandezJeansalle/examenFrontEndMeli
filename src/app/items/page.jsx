import ItemsListContainer from "../components/ItemListContainer/ItemListContainer";

export function generateMetadata({ searchParams }) {
  const { search } = searchParams;

  return {
    title: `${search} | MercadoLibre 📦`,
    description: `Envíos Gratis en el día ✓ Comprá ${search} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
  };
}

export default function Items({ searchParams }) {
  return (
    <section>
      <ItemsListContainer searchParams={searchParams} />
    </section>
  );
}
