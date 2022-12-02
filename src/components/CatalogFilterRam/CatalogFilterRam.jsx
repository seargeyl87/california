import "./CatalogFilterRam.css";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import { useParams } from "react-router-dom";

function CatalogFilterRam({ changeChooseOzu }) {
  let [stateFilterOzy, setStateFilterOzy] = useState([]);

  let { id } = useParams();
  console.log(id);

  function getFilterOzy() {
    let response = PostService.getFiltersRam().then((resp) => {
      setStateFilterOzy(
        () => resp.data.filter((item) => item.categoryID == id)[0].options
      );
    });
  }

  useEffect(() => {
    getFilterOzy();
  }, []);

  return (
    <>
      {stateFilterOzy.length ? (
        <div className="catalog-filter-ram">
          <div className="catalog-filter-ram-head">RAM</div>
          <div className="catalog-filter-ram_list-checkbox">
            {stateFilterOzy.map((item, index) => (
              <CheckBoxItem
                itemCheck={item}
                changeChooseOzu={changeChooseOzu}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default CatalogFilterRam;
