import './BasketCount.css';

function BasketCount({reduceProduct, countProduct, addProduct}) {
    return (
        <div className="basket_count">
        <button onClick={reduceProduct}>-</button>
        <input placeholder={countProduct}/>
        <button onClick={addProduct}>+</button>
    </div>

    )

}

export default BasketCount;