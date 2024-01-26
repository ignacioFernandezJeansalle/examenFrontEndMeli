import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

export async function generateMetadata({ params }) {
  const { id } = params;

  const data = await fetch(`http://localhost:3001/api/items/${id}`).then((response) => {
    if (response.status === 200) {
      response.json();
    } else {
      return { item: { title: "", description: "" } };
    }
  });

  return {
    title: `${data?.item.title} | MercadoLibre 📦`,
    description: `✓ Comprá online de manera segura con Compra Protegida © ${data?.item.title} ❤`,
  };
}

export default function ItemById({ params }) {
  return (
    <section>
      <ItemDetailContainer params={params} />
    </section>
  );
}
