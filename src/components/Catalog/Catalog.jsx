import CatalogFilterRam from "../CatalogFilterRam/CatalogFilterRam";
import "./Catalog.css";
import ListProductItem from "../ListProductItem/ListProductItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogFilterMemory from "../CatalogFilterMemory/CatalogFilterMemory";
import CatalogFilterPrice from "../CatalogFilterPrice/CatalogFilterPrice";

function Catalog() {
  let [state, setState] = useState([]);
  let [chooseFilterOzy, setChooseFilterOzy] = useState([]);
  let [chooseFilterMemory, setChooseFilterMemory] = useState([]);

  let [minPrice, setMinPrice] = useState();
  let [maxPrice, setMaxPrice] = useState();

  let [queryPage, setQueryPage] = useState(1);
  let [itemOnQuery, setItemOnQuery] = useState(6);
  let [amountQuery, setAmountQuery] = useState(0);
  let { id } = useParams();

  async function getProducts() {
    let response = PostService.getProducts(
      itemOnQuery,
      queryPage,
      chooseFilterOzy,
      chooseFilterMemory,
      id,
      minPrice,
      maxPrice
    ).then((resp) => {
      setAmountQuery(Math.ceil(resp.headers["x-total-count"] / itemOnQuery));
      setState([...state, ...resp.data]);
      setQueryPage(queryPage + 1);
    });
  }

  function changeChooseOzu(param, bool) {
    if (!bool) {
      setQueryPage(2);
      setChooseFilterOzy([...chooseFilterOzy, param]);
    } else {
      setQueryPage(2);
      setChooseFilterOzy(chooseFilterOzy.filter((item) => item !== param));
    }
  }

  async function filters() {
    let response = PostService.getProducts(
      itemOnQuery,
      queryPage - 1,
      chooseFilterOzy,
      chooseFilterMemory,
      id,
      minPrice,
      maxPrice
    ).then((resp) => {
      setAmountQuery(Math.ceil(resp.headers["x-total-count"] / itemOnQuery));
      setState(resp.data);
    });
  }

  function changeChooseMemory(param, bool) {
    if (!bool) {
      setQueryPage(2);
      setChooseFilterMemory([...chooseFilterMemory, param]);
    } else {
      setQueryPage(2);
      setChooseFilterMemory(
        chooseFilterMemory.filter((item) => item !== param)
      );
    }
  }

  function changeMinPrice(param) {
    setMinPrice(param);
  }

  function changeMaxPrice(param) {
    setMaxPrice(param);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filters();
  }, [chooseFilterOzy, chooseFilterMemory, minPrice, maxPrice]);

  return (
    <div className="catalog">
      <div className="catalog_list-filters">
        <CatalogFilterRam changeChooseOzu={changeChooseOzu} />
        <CatalogFilterMemory changeChooseOzu={changeChooseMemory} />
        <CatalogFilterPrice
          changeMinPrice={changeMinPrice}
          changeMaxPrice={changeMaxPrice}
        />
      </div>
      <div className="catalog_list-product">
        <div className="catalog_list-product_into">
          {state.map((item, index) => (
            <ListProductItem itemProduct={item} key={index} />
          ))}
        </div>
        <div className="catalog-show-more">
          {amountQuery >= queryPage ? (
            <button onClick={getProducts}>Show more</button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
