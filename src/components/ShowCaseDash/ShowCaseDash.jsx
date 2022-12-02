import "./ShowCaseDash.css";

function ShowCaseDash({ item, idPage }) {

  return (
    <div
      className={item === idPage + 1 ? "dash_point-active" : "dash_point-inactive"}
    ></div>
  );
}

export default ShowCaseDash;
