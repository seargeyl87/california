import "./ProductsBasket.css";
import { useState, useEffect } from "react";
import BasketCount from "../BasketCount/BasketCount";
import PostService from "../../API/PostService";

function ProductsBasket({ putBasket }) {
  let [state, setState] = useState([]);

  let [countProduct, setCountProduct] = useState(putBasket.options);

  function cleanLocalStorage() {
    localStorage.removeItem(putBasket.categoryProduct);
  }

  async function ProductInBasket() {
    let response = PostService.GetProductBasket(
      putBasket.categoryID,
      putBasket.categoryProduct
    ).then((resp) => setState(resp.data[0]));
  }

  useEffect(() => {
    ProductInBasket();
  }, []);

  return (
    <div className="products-basket">
      <div className="products-basket_delete" onClick={cleanLocalStorage}>
        x
      </div>

      {}
      <div className="products-basket_img">
        <img src={state.img} />
      </div>
      <div className="products-basket_name-count">
        <div className="products-basket_name">{state.name}</div>
        <div className="products-basket_count">{countProduct} шт</div>
        <div className="products-basket-price">
          {state.price * countProduct} руб
        </div>
      </div>
    </div>
  );
}

export default ProductsBasket;
