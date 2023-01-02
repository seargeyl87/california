import "./BasketPage.css";
import BasketPageItem from "../BasketPageItem/BasketPageItem";
import { useState, useMemo } from "react";

function BasketPage() {
  let [state, setState] = useState([]);

  function getDataForBasket() {
    let obj = JSON.parse(JSON.stringify(localStorage));

    for (let key in obj) {
      setState((prev) => [
        ...prev,
        {
          categoryID: Number(JSON.parse(obj[key])[1]),
          categoryProduct: Number(key),
          options: JSON.parse(obj[key])[0],
        },
      ]);
    }
  }

  useMemo(() => {
    getDataForBasket();
  }, []);

  console.log(state);
  return (
    <div className="basket-page">
      <div className="basket-page_head">
        <h1>Корзина</h1>
      </div>
      {state.map((item, index) => (
        <BasketPageItem putBasketPage={item} key={index} />
      ))}
      <div className="basket-page_order">
        <button>оформить заказ</button>
      </div>
    </div>
  );
}

export default BasketPage;
