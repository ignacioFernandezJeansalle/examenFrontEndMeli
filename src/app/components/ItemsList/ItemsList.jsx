import Item from "../Item/Item";
import "./ItemsList.scss";

export default function ItemsList({ itemsList }) {
  return (
    <ol className="items-list__container">
      {itemsList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ol>
  );
}
