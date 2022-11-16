import CatalogFilter from "../CatalogFilter/CatalogFilter";
import "./Catalog.css";
import ListProductItem from "../ListProductItem/ListProductItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";

function Catalog() {
  let [state, setState] = useState([]);
  let [chooseFilterOzy, setChooseFilterOzy] = useState([]);
  let [queryPage, setQueryPage] = useState(0);                 // количество полученных запросов для получения данных
  let [itemOnQuery, setItemOnQuery] = useState(3);             // количество товаров при одном запросе
  let [amountQuery, setAmountQuery] = useState(0);             // количество запросов для получения данных (по сути страниц) (всего)


  async function getProducts() {
    let response = PostService.getIphones(itemOnQuery, queryPage, chooseFilterOzy).then(
      (resp) => {
        setAmountQuery(Math.ceil(resp.headers["x-total-count"]/itemOnQuery))
        //console.log(resp.headers["x-total-count"]);
        setState([...state, ...resp.data]);
        setQueryPage(queryPage + 1);
      }
    );
  }

  

  console.log(amountQuery); // в общем нужно сравнить эти 2 параметра и в зависимости от данного сравнения показываить или не показывать кнопку  Show more
  console.log(queryPage)

  function changeChooseOzu(param, bool) {
    console.log(param);
    if (bool) {
      setChooseFilterOzy([...chooseFilterOzy, param]);
    }
  }
  console.log(localStorage);

  useEffect(() => {
    getProducts();
  }, []);

  //console.log(arr.findIndex((item) => item===3))

  //chooseFilterOzy.splice(chooseFilterOzy.findIndex((item) => item===param)

  // let a = 5;

  // function  switchC() {
  //     switch (typeof a) {
  //         case 'number':
  //             console.log('это верный ответ, а равно 5')
  //             break;
  //             case "string":
  //             console.log('это верный ответ, а равно 4')
  //             break;
  //         default:
  //             console.log('нету верных ответов')
  //     }

  // }

  //     useEffect(() => {
  //         switchC()
  //     },[])

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
        {amountQuery > queryPage ? <button onClick={getProducts}>Show more</button> : <div></div>}
        </div>

      </div>
    </div>
  );
}

export default Catalog;
