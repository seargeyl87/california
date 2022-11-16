import "./ListProductItem.css";
import BasketCount from "../BasketCount/BasketCount";
import { useState } from "react";

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

  function storage() {
    localStorage.setItem(itemProduct.id, itemProduct.name); // необходимо сделать так, чтобы при вызове данной функции был перерендер компонентов. В другом компоненте (например каталог) вызвать какую-нибудь функцию с изменением состояния в зависимости от изменения lokalStorage
  }

  function cleanLocalStorage() {
    localStorage.removeItem(itemProduct.id);
    (setCountProduct(0))
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
