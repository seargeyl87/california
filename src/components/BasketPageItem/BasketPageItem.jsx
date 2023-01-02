import "./BasketPageItem.css";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";
import BasketCount from "../BasketCount/BasketCount";

function BasketPageItem({ putBasketPage }) {
  let [state, setState] = useState([]);

  async function ProductInBasket() {
    let response = PostService.GetProductBasket(
      putBasketPage.categoryID,
      putBasketPage.categoryProduct
    ).then((resp) => setState(resp.data[0]));
  }

  useEffect(() => {
    ProductInBasket();
  }, []);

  return (
    <div className="basket-page-item">
      <div className="basket-page-item_img">
        <img src={state.img} />
      </div>
      <div className="basket-page-item_info">
        <div className="basket-page-item_info_head">{state.name}</div>
        <div className="basket-page-item_info_txt">{state.description}</div>
        <div className="basket-page-item_info_ram">
          Оперативная память {state.ram} ГБ
        </div>
        <div className="basket-page-item_info_memory">
          Память устройства {state.memory} ГБ
        </div>
        <div className="basket-page-item_info_price">{state.price} руб</div>
      </div>
      <div className="basket-page-item-count">
        <BasketCount
          countProduct={putBasketPage.options}
        />
        <div className="basket-page-item-count_full-price">
          {putBasketPage.options * state.price} руб
        </div>
      </div>
    </div>
  );
}

export default BasketPageItem;
