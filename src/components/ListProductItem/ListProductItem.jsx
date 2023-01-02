import "./ListProductItem.css";
import BasketCount from "../BasketCount/BasketCount";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ListProductItem({ itemProduct }) {
  let [countProduct, setCountProduct] = useState(0);

  function reduceProduct() {
    if (countProduct > 0) {
      setCountProduct(--countProduct);
    }
  }
  function addProduct() {
    setCountProduct(++countProduct);
  }

  const { id } = useParams();

  function storage() {
    localStorage.setItem(itemProduct.id, JSON.stringify([countProduct, id])); 
  }
  
  function cleanLocalStorage() {
    localStorage.removeItem(itemProduct.id);
  }

  return (
    <div className="catalog_list-product-item">
      <div className="catalog_list-product-item-into">
        <div className="catalog_list-product-item-into-img">
          <img src={itemProduct.img} />
        </div>
        <div className="catalog_list-product-item-into-headind">
          {itemProduct.name}
        </div>
        <div className="catalog_list-product-item-into-price">
          {itemProduct.price} р
        </div>
        <div className="catalog_list-product-item-into-basket">
          <BasketCount
            reduceProduct={reduceProduct}
            countProduct={countProduct}
            addProduct={addProduct}
          />
          <div className="catalog_list-product-item-into-basket_button-basket">
            <button onClick={storage}>В корзину</button>
            <button onClick={cleanLocalStorage}>очистить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProductItem;
