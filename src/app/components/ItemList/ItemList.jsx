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
    <li key={item.id} className="items-list__item--container">
      <Link className="items-list__item--link" href={`/items/${item.id}`}>
        <div className="items-list__item--thumbnail-container">
          <Image
            className="items-list__item--thumbnail"
            src={item.picture}
            width={180}
            height={180}
            alt={item.title}
            priority
          />
        </div>
      </Link>
      <div className="items-list__item--details-container">
        <div className="items-list__item--details-price">
          <span>{currency}</span>
          <span>{amount}</span>
          {item.free_shipping && (
            <span>
              <Image
                className="items-list__item--details-shipping"
                src={ShippingIcon}
                alt="Icono de aviso de entrega gratuita"
              />
            </span>
          )}
        </div>
        <Link className="items-list__item--link" href={`/items/${item.id}`}>
          <h2 className="items-list__item--details-title">{item.title}</h2>
        </Link>
      </div>
      <div className="items-list__item--condition">
        <span>{condition}</span>
      </div>
    </li>
  );
}
