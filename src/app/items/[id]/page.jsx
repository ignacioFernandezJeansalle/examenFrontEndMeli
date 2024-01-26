import { resolve } from "styled-jsx/css";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

export async function generateMetadata({ params }) {
  const { id } = params;

  let data = {};
  const response = await fetch(`http://localhost:3001/api/items/${id}`);
  if (response.ok) {
    data = await response.json();
  } else {
    data = { item: { title: "", description: "" } };
  }

  return {
    title: `${data.item.title} | MercadoLibre 📦`,
    description: `✓ Comprá online de manera segura con Compra Protegida © ${data.item.title} ❤`,
  };
}

export default function ItemById({ params }) {
  return (
    <section>
      <ItemDetailContainer params={params} />
    </section>
  );
}
