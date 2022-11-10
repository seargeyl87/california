import './ShowCaseDash.css';


function ShowCaseDash({item, idPage}) {
    console.log(idPage);
    console.log(item)
    return (   
       <div className={item === idPage ? "dash_point-active" : "dash_point-inactive"}></div>
    )
}

export default ShowCaseDash;