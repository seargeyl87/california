import "./ModalProduct.css";

function ModalProduct({ item }) {
  return (
    <div className="modal-product">
      <div className="modal-search_product_img">
        <img src={item.img} />
      </div>
      <div className="modal-search_product_head-description">
        <div className="modal-search_product_head-description_head">
          {item.name}
        </div>
        <div className="modal-search_product_head-description_description">
          {item.description}
        </div>
      </div>
      <div className="modal-search_product_price-button">
        <div className="modal-search_product_price">{item.price} руб</div>
        <div className="modal-search_product_button">
          <button>Перейти</button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
