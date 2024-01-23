import ItemList from "../ItemList/ItemList";
import "./ItemsListContainer.scss";

export default function ItemsListContainer({ itemsList }) {
  return (
    <ol className="items-list__container">
      {itemsList.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </ol>
  );
}
