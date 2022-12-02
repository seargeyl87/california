import "./ModalSearch.css";
import ModalProduct from "../ModalProduct/ModalProduct";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";
import {useParams} from "react-router-dom";


function ModalSearch({ activeSearch, closeModalSearch }) {
  let [text, setValueText] = useState("");
  let [listProduct, setListProduct] = useState([]);

  let {id} = useParams();    // для поиска по категориям нужно вытащить это айди, сейчас выходит undefined

  async function getProducts(id) {
    let response = await PostService.ProductSearch(id, text).then((resp) => {
      setListProduct(resp.data);
    });
  }
 
  useEffect(() => {
    getProducts(); 
  }, [text]);

  function inputValue(e) {
    setValueText(e.target.value);
  }

  return (
    <div
      className={activeSearch ? "modal-search active" : "modal-search"}
      onClick={closeModalSearch}
    >
      <div
        className="modal-search_content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-search_content_search">
          <input value={text} onChange={inputValue} />
          <div
            className="modal-search_content_search_close"
            onClick={closeModalSearch}
          >
            Х
          </div>
        </div>
        <div className="modal-search_product">
          {text ? (
            listProduct.map((item, index) => (
              <ModalProduct item={item} key={index} />
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalSearch;
