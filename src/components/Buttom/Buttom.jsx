import "./Buttom.css";
import {useState} from 'react';
import {useDispatch, useSelector } from "react-redux";

function Buttom() {

  // let [state, setState] = useState(5);

  // let reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'minus':
  //       setState((state)=> state - 1)
  //       break;
  //       case 'plus':
  //         setState((state) => state + 1)
  //     default:
  //       setState(5)
  //       break;
  //   }
  // }
  // let dispath = useDispatch()



  return (
    <div className="buttom">

      {/* <div className="buttons">
        <button>убавить</button>
        <div>{state}</div>
        <button>прибавить</button>
      </div> */}


      <div className="buttom-menu">
        <div className="buttom_logo-description">
          <div className="buttom_logo-description_logo">
              <img src="icons/buttom-logo.svg"/>
          </div>
          <div className="buttom_logo-description_description">
            Sign up for texts to be notified about our best offers on the
            perfect gifts.
          </div>
        </div>
        <div className="buttom_sections">
          <div className="buttom_sections_list">
            <div className="buttom_sections_list_head">All products</div>
            <div className="buttom_sections_list_item-menu">Phones</div>
            <div className="buttom_sections_list_item-menu">Watch</div>
            <div className="buttom_sections_list_item-menu">Tablet</div>
            <div className="buttom_sections_list_item-menu">Laptops</div>
          </div>

          <div className="buttom_sections_list">
            <div className="buttom_sections_list_head">Company</div>
            <div className="buttom_sections_list_item-menu">About</div>
            <div className="buttom_sections_list_item-menu">Support</div>
          </div>

          <div className="buttom_sections_list">
            <div className="buttom_sections_list_head">Support</div>
            <div className="buttom_sections_list_item-menu">
              Style Guide
            </div>
            <div className="buttom_sections_list_item-menu">Licensing</div>
            <div className="buttom_sections_list_item-menu">
              Change Log
            </div>
            <div className="buttom_sections_list_item-menu">Contact</div>
          </div>

          <div className="buttom_sections_list">
            <div className="buttom_sections_list_head">Follow Us</div>
            <div className="buttom_sections_list_item-menu">Instagram</div>
            <div className="buttom_sections_list_item-menu">Facebook</div>
            <div className="buttom_sections_list_item-menu">LinkedIn</div>
            <div className="buttom_sections_list_item-menu">Youtube</div>
          </div>
        </div>
      </div>
      <div className="buttom-line">

      </div>
    </div>
  );
}

export default Buttom;
