import "./Modal.css";
import ProductsBasket from "../ProductsBasket/ProductsBasket"; 
import {useEffect, useState} from "react";
import axios from "axios";



function Modal({active, closeModal}) {
    let [state, setState] = useState([]);
    console.log(state)

console.log(localStorage);

    async function getDataForBasket() {
        let obj = JSON.parse(JSON.stringify(localStorage))
        for(let key in obj) {
            const response = await axios.get(`http://localhost:3000/2`)
            .then((resp) => {
                setState(...state, resp.data)
            })
        }
    // в общем нужно, чтобы по id шел запрос на сервер, а мы получали данные и записывали их в наше состояние
    }

    useEffect(() => {
        getDataForBasket();
    }, [])

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_close" onClick={closeModal}>x</div>
            <div className="modal__content">
                <div className="modal__content_head">корзина заказа</div>
                <ProductsBasket/>
                <button className="modal__content_button">перейти в корзину</button>
             </div>
        </div>
    )

}


export default Modal;
