import "./CatalogFilterPrice.css";


function CatalogFilterPrice({ changeMinPrice, changeMaxPrice }) {

  function getFilterMinPrice(e) {
    if (e.target.value) {
      changeMinPrice(Number(e.target.value));
    } else {
      changeMinPrice(undefined);
    }
  }

  function getFilterMaxPrice(e) {
    if (e.target.value) {
      changeMaxPrice(Number(e.target.value));
    } else {
      changeMaxPrice(undefined);
    }
  }

  return (
    <div className="catalog-filter-price">
      <div className="catalog-filter-price-head">Price</div>
      <div className="catalog-filter-price-value">
        <input
          type="text"
          placeholder="price from"
          onChange={getFilterMinPrice}
        />
        <input
          type="text"
          placeholder="price until"
          onChange={getFilterMaxPrice}
        />
      </div>
    </div>
  );
}

export default CatalogFilterPrice;
