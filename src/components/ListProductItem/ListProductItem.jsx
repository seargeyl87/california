import './ListProductItem.css';


function  ListProductItem({itemProduct}) {
    return (
        <div className="catalog_list-product-item">
            <div className="catalog_list-product-item-into">
                <div className="catalog_list-product-item-into-img">
                    <img src={itemProduct.img}/>
                </div>
                <div className="catalog_list-product-item-into-headind">{itemProduct.name}</div>
                <div className="catalog_list-product-item-into-price">{itemProduct.price} р</div>
            </div>
        </div>
    )  
}

export default ListProductItem;