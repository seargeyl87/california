import "./CheckBoxItem.css";
import { useState } from "react";

function CheckBoxItem({ itemCheck, changeChooseOzu }) {
  let [check, setCheck] = useState(false);

  function checkChange() {
    setCheck((check) => !check);
    changeChooseOzu(itemCheck, check);
  }

  return (
    <div className="checkbox-item">
      <input type="checkbox" checked={check} onChange={checkChange} />
      <div className="checkbox-item_checkbox_name">{itemCheck} GB</div>
    </div>
  );
}

export default CheckBoxItem;
