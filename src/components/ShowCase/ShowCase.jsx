import "./ShowCase.css";
import ShowCaseDash from "../ShowCaseDash/ShowCaseDash";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";

function ShowCase() {
  let [state, setState] = useState([]);
  let [stateDash, setStateDash] = useState([]);
  let [idPage, setIdPage] = useState(0);

  async function getData() {
    let response = PostService.getDataShowCase().then((resp) => {
      setState(resp.data);
    });
  }

  async function getDataDash() {
    let response = await PostService.getDash().then((resp) => {
      setStateDash(resp.data);
    });
  }

  function prevPage() {
    if (idPage > 0) { 
      setIdPage(--idPage);
    } else {
      setIdPage(2);
    }
  }

  function nextPage() {
    if (idPage < 2) {
      setIdPage(++idPage);
    } else {
      setIdPage(0);
    }
  }

  useEffect(() => {
    getData();
  }, [idPage]);

  useEffect(() => {
    getDataDash();
  }, []);

  // let arr = [{ status: true }, { status: false }, { status: false }];

  return (
    <div className="show-case">
      <div className="show-case_arrow-left">
        <div className="show-case_arrow-left-icon" onClick={prevPage}></div>
      </div>

      {state.map((item, index) =>
        index === idPage ? (
          <>
            <div className="show-case_info">
                <div className="show-case_head">{item.heading}</div>
                <div className="show-case_description">{item.description}</div>
                <div className="show-case_button">
                  <button>Explore</button>
                </div>
            </div>
            <div className="show-case_picture">
                 <img src={item.img} />
            </div>
          </>
        ) : (
          <></>
        )
      )}

      <div className="show-case_arrow-right">
        <div className="show-case_arrow-right-icon" onClick={nextPage}></div>
      </div>
      <div className="show-case_dash">
        <div className="dash">
          {stateDash.map((item, index) => (
            <ShowCaseDash item={item} idPage={idPage} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
