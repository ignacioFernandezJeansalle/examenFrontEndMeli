import { usePrice } from "../../customHooks/usePrice";
import { useCondition } from "../../customHooks/useCondition";
import Image from "next/image";
import "./ItemDetail.scss";

export default function ItemDetail({ item }) {
  const { currency, amount, decimals } = usePrice(item.price);
  const { condition } = useCondition(item.condition);

  return (
    <div className="item-detail__container">
      <div className="item-detail__col">
        <div className="item-detail__picture--container">
          <Image
            className="item-detail__picture--image"
            src={item.picture}
            alt={item.title}
            width={300}
            height={300}
            priority={true}
          />
        </div>
        <h2 className="item-detail__description--title">Descripción del producto</h2>
        <p className="item-detail__description--text">{item.description}</p>
      </div>
      <div className="item-detail__col">
        <span className="item-detail__condition">
          {condition}
          {item.free_shipping && (
            <span>
              {" "}
              | <strong>Envío gratis</strong>
            </span>
          )}
        </span>
        <h1 className="item-detail__title">{item.title}</h1>
        <div className="item-detail__price">
          <span className="item-detail__price--currency">{currency}</span>
          <span className="item-detail__price--amount"> {amount}</span>
          <span className="item-detail__price--decimals">{decimals}</span>
        </div>
        <button className="item-detail__button">Comprar</button>
      </div>
    </div>
  );
}
