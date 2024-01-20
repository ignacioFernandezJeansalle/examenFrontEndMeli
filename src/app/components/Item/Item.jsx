import Link from "next/link";
import Image from "next/image";
import ShippingIcon from "../../assets/icons/ShippingIcon.webp";
import "./Item.scss";

export default function Item({ item }) {
  const price = Number(item.price.amount + (item.price.decimals / 100).toFixed(2));
  const locales = item.price.currency === "ARS" ? "es-AR" : "es-US";

  return (
    <li key={item.id} className="">
      <Link className="item" href={`/items/${item.id}`}>
        <Image className="item__thumbnail" src={item.picture} width={180} height={180} alt={item.title} />
        <div className="item__info-container">
          <div className="item__info-price">
            <h3 className="item__info-price-value">
              {price.toLocaleString(locales, { style: "currency", currency: item.price.currency })}
            </h3>
            {item.free_shipping && (
              <Image className="item__info-price-icon" src={ShippingIcon} alt="Icono de aviso de entrega gratuita" />
            )}
          </div>
          <h2 className="item__info-title">{item.title}</h2>
        </div>
      </Link>
    </li>
  );
}
