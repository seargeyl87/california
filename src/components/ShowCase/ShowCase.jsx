import "./ShowCase.css";
import ShowCaseDash from "../ShowCaseDash/ShowCaseDash";
import { useState, useEffect } from "react";
import axios from "axios";

function ShowCase() {
  let [state, setState] = useState([]);
  let [stateDash, setStateDash] = useState([]);
  let [idPage, setIdPage] = useState(1);

  async function getData() {
    let response = axios
      .get(`http://localhost:3000/showcase?id=${idPage}`)
      .then((resp) => {
        setState(resp.data[0]);
      });
  }

  async function getDataDash() {
    let response = axios
      .get(`http://localhost:3000/showcase-dash`)
      .then((resp) => {
        setStateDash(resp.data);
      });
  }


  function prevPage() {
    if (idPage > 1) {
      setIdPage(--idPage);
    } else {
      setIdPage(3);
    }
  }

  function nextPage() {
    if (idPage < 3) {
      setIdPage(++idPage);
    } else {
      setIdPage(1);
    }
  }

  useEffect(() => {
    getData();
  }, [idPage]);

  useEffect(() => {
    getDataDash();
  }, []);

  let arr = [{ status: true }, { status: false }, { status: false }];

  return (
    <div className="show-case">
      <div className="show-case_arrow-left">
        <div className="show-case_arrow-left-icon" onClick={prevPage}></div>
      </div>
      <div className="show-case_info">
        <div className="show-case_head">{state.heading}</div>
        <div className="show-case_description">{state.description}</div>
        <div className="show-case_button">
          <button>Explore</button>
        </div>
        <div className="show-case_dash">
          <div className="dash">
            {stateDash.map((item, index) => (
              <ShowCaseDash item={item} idPage={idPage} key={index} />
            ))}
          </div>
        </div> 
      </div>
      <div className="show-case_picture">
        <img src={state.img} />
      </div>
      <div className="show-case_arrow-right">
        <div className="show-case_arrow-right-icon" onClick={nextPage}></div>
      </div>
    </div>
  );
}

export default ShowCase;
