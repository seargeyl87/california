import './CheckBoxItem.css';
import {useState, useEffect} from 'react';


function CheckBoxItem({itemCheck, changeChooseOzu}) {

    let [check, setCheck] = useState(false);
    
    function checkChange() {
        setCheck((check) => !check);
    }
 
    useEffect(() => {
         changeChooseOzu(itemCheck, check)
         }, [check]);


         

    return (
      <div className="checkbox-item"> 
            <input type="checkbox" checked={check} onChange={checkChange}/>
            <div className="checkbox-item_checkbox_name">{itemCheck} GB</div>         
     </div>
    )
}

export default CheckBoxItem;