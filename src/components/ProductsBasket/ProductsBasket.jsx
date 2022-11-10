import './ProductsBasket.css';
import {useState} from 'react';

function ProductsBasket() {
    let [countProduct, setCountProduct] = useState(2);

    function reduceProduct() {
        if(countProduct > 1) {
            setCountProduct(--countProduct)
        }
    }
    function addProduct() {
        setCountProduct(++countProduct)
    }

    return (
        <div className="products-basket">
            <div className="products-basket_delete">x</div>
            <div className="products-basket_img">
                <img src="img/categories_phone.png"/>
            </div>
            <div className="products-basket_name-count">
                <div className="products-basket_name">Apple iPhone 14 128GB</div>
                <div className="products-basket_count">
                    <button onClick={reduceProduct}>-</button>
                    <input value={countProduct}/>
                    <button onClick={addProduct}>+</button>
                </div>
            </div>


        </div>
    )


}


export default ProductsBasket;