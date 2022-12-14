import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <div className="categories_head">
        Shop our latest offers and categories
      </div>
      <div className="categories_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </div>
      <div className="categories_section">
        <div className="categories_laptop-watch">
          <Link to="/products/2">
            <div className="categories_laptop">
              <img src="img/categories_laptop.png" />
              <div className="categories_laptop_name-description">
                <div className="categories_laptop_name-description-into">
                  <div className="categories_laptop_name">Laptops</div>
                  <div className="categories_laptop_description">
                    True Laptop Solution
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/products/3">
            <div className="categories_watch">
              <img src="img/categories_watch.png" />
              <div className="categories_watch_name-description">
                <div className="categories_watch_name-description-into">
                  <div className="categories_watch_name">Watch</div>
                  <div className="categories_watch_description">
                    Not just stylisht
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="categories_phone">
          <Link to="/products/1">
            <div className="categories_phone_img">
              <img src="img/categories_phone.png" />
            </div>
            <div className="categories_phone_name-description">
              <div className="categories_phone_name">Phones</div>
              <div className="categories_phone_description">
                Your day to day life
              </div>
            </div>
          </Link>
        </div>

        <div className="categories_tablet">
          <Link to="/products/4">
            <div className="categories_tablet_name-description">
              <div className="categories_tablet_name">Tablet</div>
              <div className="categories_tablet_description">
                Empower your work
              </div>
            </div>
            <div className="categories_tablet_img">
              <img src="img/categories_tablet.png" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
