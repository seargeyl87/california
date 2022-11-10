import "./BestAround.css";

function BestAround() {
  return (
    <div className="best-around">
      <div className="best-around_head">See the best around here</div>
      <div className="best-around_description">
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </div>
      <div className="best-around_list-products">
        <div className="best-around_list-products_product">
          <div className="best-around_list-products_product-into">
            <div className="best-around_list-products_product-info">
              <div className="best-around_list-products_product_head">
                Smart light bulb pack
              </div>
              <div className="best-around_list-products_product_description">
                Latest and gratest
              </div>
              <div className="best-around_list-products_product_button">
                <button>Explore</button>
              </div>
            </div>
            <div className="best-around_list-products_product_img">
              <img src="img/best-around-latest.png" />
            </div>
          </div>
        </div>

        <div className="best-around_list-products_product">
          <div className="best-around_list-products_product-into">
            <div className="best-around_list-products_product-info">
              <div className="best-around_list-products_product_head">
                Smart light bulb pack
              </div>
              <div className="best-around_list-products_product_description">
                Best selling
              </div>
              <div className="best-around_list-products_product_button">
                <button>Explore</button>
              </div>
            </div>
            <div className="best-around_list-products_product_img">
              <img src="img/best-around-best-selling.png" />
            </div>
          </div>
        </div>

        <div className="best-around_list-products_product">
          <div className="best-around_list-products_product-into">
            <div className="best-around_list-products_product-info">
              <div className="best-around_list-products_product_head">
                Smart light bulb pack
              </div>
              <div className="best-around_list-products_product_description">
                Every product
              </div>
              <div className="best-around_list-products_product_button">
                <button>Explore</button>
              </div>
            </div>
            <div className="best-around_list-products_product_img">
              <img src="img/best-around-every-product.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestAround;
