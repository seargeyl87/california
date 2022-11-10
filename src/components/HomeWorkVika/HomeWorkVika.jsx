import { useState, useEffect } from "react";
import "./HomeWorkVika.css";
import ListItem from "./ListItem";
import PostService from './PostServiceVika';

function HomeWorkVika() {
  let [listing, setListing] = useState([]);
  let [checkBox, setCheckbox] = useState(false);
  let [text, setText] = useState("");

  async function getData() {
    let response = await PostService.getArray();
    setListing(response);
  }
  console.log(text)

  async function getData2() { 
    let response = await PostService.getArray(text);
    checkBox ?   setListing(listing => listing.sort()) : setListing(response)
  }

  function changeCheckBox() {
    setCheckbox(checkBox => !checkBox);
    getData2()
  }

  useEffect(() => {
      getData();
  }, [])

  useEffect(() => {
    getData2();
  }, [checkBox, text])

  async function changeText(e) {
    getData2()
    setText(e.target.value);
    let response = await PostService.getArray(e.target.value);
    let b = listing.filter((item) => item.includes(e.target.value))
    console.log(b);
    checkBox ?  setListing(response.sort()) : setListing(response);
  }

  function dropped() {
    setCheckbox(false);
    setText('');
} 

  return (
    <div className="filter">
      <div className="filter_button">
        <input type="checkbox" checked={checkBox} onChange={changeCheckBox} />
        <input type="text" value={text} onChange={changeText} />
        <button onClick={dropped}>Сброс</button>
      </div>
      <div className="filter_listing">
        <ul>
          {
            listing.map((item, index) => (
                <ListItem item={item} key={index} />
              ))
        }
        </ul>
      </div>
    </div>
  );
}

export default HomeWorkVika;
