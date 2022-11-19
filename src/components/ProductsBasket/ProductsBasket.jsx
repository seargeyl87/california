import "./ProductsBasket.css";
import { useState } from "react";
import BasketCount from "../BasketCount/BasketCount";


function ProductsBasket(limit, page, ozy, id) {
  let [countProduct, setCountProduct] = useState(0);
//   let [products, setProducts] = useState([]);

//   function  getProducts() {
//     let response = PostService.getIphones(limit, page, ozy, 5).then((resp) => {
//       setProducts(resp.data)
//     })
//   }
// useState(() => {
//   getProducts();
// },[])

// console.log(products)


  function reduceProduct() {
    if (countProduct > 1) {
      setCountProduct(--countProduct);
    }
  }
  function addProduct() {
    setCountProduct(++countProduct);
  }

  console.log(localStorage)

  return (
    <div className="products-basket">
      <div className="products-basket_delete">x</div>
      <div className="products-basket_img">
        <img src="img/categories_phone.png" />
      </div>
      <div className="products-basket_name-count">
        <div className="products-basket_name">Apple iPhone 14 128GB</div>
        <BasketCount
          reduceProduct={reduceProduct}
          countProduct={countProduct}
          addProduct={addProduct}
        />
      </div>
    </div>
  );
}

export default ProductsBasket;
