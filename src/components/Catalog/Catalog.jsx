import CatalogFilter from "../CatalogFilter/CatalogFilter";
import "./Catalog.css";
import ListProductItem from "../ListProductItem/ListProductItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";

function Catalog() {
  let [state, setState] = useState([]);
  let [chooseFilterOzy, setChooseFilterOzy] = useState([]);
  let [queryPage, setQueryPage] = useState(0);                 // количество полученных запросов для получения данных 
  let [itemOnQuery, setItemOnQuery] = useState(6);             // количество товаров при одном запросе
  let [amountQuery, setAmountQuery] = useState(0);             // количество запросов для получения данных (по сути страниц) (всего)


  async function getProducts() {
    let response = PostService.getIphones(itemOnQuery, queryPage, chooseFilterOzy).then(
      (resp) => {
        setAmountQuery(Math.ceil(resp.headers["x-total-count"]/itemOnQuery))
        setState([...state, ...resp.data]);
        setQueryPage(++queryPage);
      }
    );
  }
  console.log(queryPage)
  console.log(chooseFilterOzy)


  function changeChooseOzu(param, bool) {
    if (!bool) {
      setChooseFilterOzy([...chooseFilterOzy, param]);
    } else {
      setChooseFilterOzy(chooseFilterOzy.filter(item => item !==param));  
    }
  }

  function  filterOzu() {
    let response = PostService.getIphones(itemOnQuery, queryPage, chooseFilterOzy).then(
      (resp) => {
        setAmountQuery(Math.ceil(resp.headers["x-total-count"]/itemOnQuery))
        setState(resp.data);
        
      }
    )
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterOzu();
  }, [chooseFilterOzy]);



  return (
    <div className="catalog">
      <div className="catalog_list-filters">
        <CatalogFilter changeChooseOzu={changeChooseOzu} />
      </div>
      <div className="catalog_list-product">
        <div className="catalog_list-product_into">
          {state.map((item, index) => (
            <ListProductItem itemProduct={item} key={index} />
          ))}
        </div>
        <div className="catalog-show-more">
        {amountQuery >= queryPage ? <button onClick={getProducts}>Show more</button> : <div></div>}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
