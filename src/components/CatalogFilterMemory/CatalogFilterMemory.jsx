import "./CatalogFilterMemory.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";

function CatalogFilterMemory({ changeChooseOzu }) {
  let [stateFilterMemory, setStateFilterMemory] = useState([]);
  let { id } = useParams();

  function getFilterMemory() {
    let response = PostService.getFiltersMemory().then((resp) => {
      setStateFilterMemory(
        () => resp.data.filter((item) => item.categoryID == id)[0].options
      );
    });
  }

  useEffect(() => {
    getFilterMemory();
  }, []);

  return (
    <div className="catalog-filter-memory">
      <div className="catalog-filter-memory-head">Memory</div>
      <div className="catalog-filter-memory_list-checkbox">
        {stateFilterMemory.map((item, index) => (
          <CheckBoxItem
            itemCheck={item}
            changeChooseOzu={changeChooseOzu}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogFilterMemory;
