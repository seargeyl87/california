import "./MostSelledItems.css";

function MostSelledItems() {
  return (
    <div className="most-selled-items">
      <div className="most-selled-items_head">
        Save on our most selled items.
      </div>
      <div className="most-selled-items_description">
        Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
      </div>
      <div className="most-selled-items_list-items">
        <div className="most-selled-items_list-items_items">
          <div className="most-selled-items_list-items_items_img">
            <img src="img/most-selled-items-macbook13.png" />
          </div>
          <div className="most-selled-items_list-items_items_info">
            <div className="most-selled-items_list-items_items_info_name">
              MacBook Pro 13
            </div>
            <div className="most-selled-items_list-items_items_info_description">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </div>
            <div className="most-selled-items_list-items_items_info_price">
              $ 1,200.00 USD
            </div>
          </div>
        </div>
        <div className="most-selled-items_list-items_items">
          <div className="most-selled-items_list-items_items">
            <div className="most-selled-items_list-items_items_img">
              <img src="img/most-selled-items-galaxy-watch.png" />
            </div>
            <div className="most-selled-items_list-items_items_info">
              <div className="most-selled-items_list-items_items_info_name">
                Smart Galaxy Watch 3
              </div>
              <div className="most-selled-items_list-items_items_info_description">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </div>
              <div className="most-selled-items_list-items_items_info_price">
                $ 199.00 USD
              </div>
            </div>
          </div>
        </div>
        <div className="most-selled-items_list-items_items">
          <div className="most-selled-items_list-items_items">
            <div className="most-selled-items_list-items_items_img">
              <img src="img/most-selled-items-macbook-m1.png" />
            </div>
            <div className="most-selled-items_list-items_items_info">
              <div className="most-selled-items_list-items_items_info_name">
                MacBook Air M1
              </div>
              <div className="most-selled-items_list-items_items_info_description">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </div>
              <div className="most-selled-items_list-items_items_info_price">
                $ 1,009.00 USD
              </div>
            </div>
          </div>
        </div>
        <div className="most-selled-items_list-items_items">
          <div className="most-selled-items_list-items_items">
            <div className="most-selled-items_list-items_items_img">
              <img src="img/most-selled-items-ipad.png" />
            </div>
            <div className="most-selled-items_list-items_items_info">
              <div className="most-selled-items_list-items_items_info_name">
                iPad
              </div>
              <div className="most-selled-items_list-items_items_info_description">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </div>
              <div className="most-selled-items_list-items_items_info_price">
                $ 610.00 USD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostSelledItems;
