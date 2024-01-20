import Item from "../Item/Item";
import "./ItemsList.scss";

export default function ItemsList({ itemsList }) {
  return (
    <ol className="items-list-container">
      {itemsList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ol>
  );
}
