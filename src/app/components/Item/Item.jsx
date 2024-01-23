import Link from "next/link";
import Image from "next/image";
import ShippingIcon from "../../assets/icons/ShippingIcon.webp";
import "./Item.scss";

export default function Item({ item }) {
  const amount = Intl.NumberFormat("es-AR").format(item.price.amount);
  const currency = item.price.currency === "USD" ? "U$S" : "$";
  let condition = "";
  if (item.condition === "new") condition = "Nuevo";
  if (item.condition === "used") condition = "Usado";

  return (
    <li key={item.id} className="items-list-item__container">
      <Link className="items-list-item__link" href={`/items/${item.id}`}>
        <div className="items-list-item__thumbnail-container">
          <Image className="items-list-item__thumbnail" src={item.picture} width={180} height={180} alt={item.title} />
        </div>
        <div className="items-list-item__details-container">
          <div className="items-list-item__details-price">
            <span>{currency}</span>
            <span>{amount}</span>
            {item.free_shipping && (
              <Image
                className="items-list-item__details-shipping"
                src={ShippingIcon}
                alt="Icono de aviso de entrega gratuita"
              />
            )}
          </div>
          <h2 className="items-list-item__details-title">{item.title}</h2>
        </div>
        <p className="items-list-item__condition">{condition}</p>
      </Link>
    </li>
  );
}
