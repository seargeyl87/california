import "./ModalSearch.css";
import ModalProduct from "../ModalProduct/ModalProduct";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";
import { useMatch } from "react-router-dom";

function ModalSearch({ activeSearch, closeModalSearch }) {
  let [text, setValueText] = useState("");
  let [listProduct, setListProduct] = useState([]);

  const productMatch = useMatch("/products/:id");

  async function getProducts() {
    let response = await PostService.ProductSearch(
      productMatch ? productMatch.params.id : 1,
      text
    ).then((resp) => {
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
