import "./Modal.css";
import ProductsBasket from "../ProductsBasket/ProductsBasket";


function Modal({active, closeModal}) {
    console.log(active)
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_close" onClick={closeModal}>x</div>
            <div className="modal__content">
                <div className="modal__content_head">корзина заказа</div>
                <ProductsBasket/>
                <ProductsBasket/>

                <button className="modal__content_button">перейти в корзину</button>
             </div>
        </div>
    )

}


export default Modal;