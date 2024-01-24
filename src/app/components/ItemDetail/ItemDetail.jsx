import Image from "next/image";
import "./ItemDetail.scss";

export default function ItemDetail({ item }) {
  return (
    <div className="item-detail__container">
      <div className="item-detail__details-container">
        <div className="item-detail__picture-container">
          <Image className="item-detail__picture-image" src={item.picture} alt={item.title} width={300} height={300} />
        </div>
        <div className="item-detail__right-container">
          <span className="item-detail__right-condition">{item.condition}</span>
          <h1 className="item-detail__right-title">{item.title}</h1>
          <span className="item-detail__right-price">
            {item.price.currency} {item.price.amount} {item.price.decimals}
            <span>{item.free_shipping ? "Free_shipping" : ""}</span>
          </span>
          <button className="item-detail__right-button">Comprar</button>
        </div>
      </div>
      <div className="item-detail__description-container">
        <h2 className="item-detail__description-title">Descripción del producto</h2>
        <p className="item-detail__description-description">{item.description}</p>
      </div>
    </div>
  );
}
