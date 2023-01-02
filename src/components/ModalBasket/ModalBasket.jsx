import "./ModalBasket.css";
import ProductsBasket from "../ProductsBasket/ProductsBasket";
import { useMemo, useState } from "react";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";

function ModalBasket({ active, closeModal }) {
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

  const productMatch = useMatch("/products/:id");

  useMemo(() => {
    getDataForBasket();
  }, []);

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal_close" onClick={closeModal}>
        x
      </div>
      <div className="modal__content">
        <div className="modal__content_head">корзина заказа</div>

        {state.map((item, index) => (
          <ProductsBasket
            putBasket={item}
            key={index}
            getDataForBasket={getDataForBasket}
          />
        ))}

        {state.length ? (
          <div className="modal__content_button">
            <Link to="/basket-page">
              <button onClick={closeModal}>перейти в корзину</button>
            </Link>
          </div>
        ) : (
          <div>Корзина заказа пуста</div>
        )}
      </div>
    </div>
  );
}

export default ModalBasket;
