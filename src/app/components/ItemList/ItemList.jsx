import { usePrice } from "../../customHooks/usePrice";
import { useCondition } from "../../customHooks/useCondition";
import Link from "next/link";
import Image from "next/image";
import ShippingIcon from "../../assets/icons/ShippingIcon.webp";
import "./ItemList.scss";

export default function ItemList({ item }) {
  const { currency, amount } = usePrice(item.price);
  const { condition } = useCondition(item.condition);

  return (
    <li key={item.id} className="items-list-item__container">
      <Link className="items-list-item__link" href={`/items/${item.id}`}>
        <div className="items-list-item__thumbnail-container">
          <Image className="items-list-item__thumbnail" src={item.picture} width={180} height={180} alt={item.title} />
        </div>
      </Link>
      <div className="items-list-item__details-container">
        <div className="items-list-item__details-price">
          <span>{currency}</span>
          <span>{amount}</span>
          {item.free_shipping && (
            <span>
              <Image
                className="items-list-item__details-shipping"
                src={ShippingIcon}
                alt="Icono de aviso de entrega gratuita"
              />
            </span>
          )}
        </div>
        <h2 className="items-list-item__details-title">{item.title}</h2>
      </div>
      <div className="items-list-item__condition">{condition}</div>
    </li>
  );
}
