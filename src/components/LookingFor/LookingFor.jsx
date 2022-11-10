import './LookingFor.css';


function LookingFor() {
    return (
        <div className="looking-for">
            <div className="looking-for_head">Looking for anything else?</div>
            <div className="looking-for_search">
                <input type="search" name="Search" placeholder="Search keyword"/>
                <img src="icons/looking-for-search.svg"/>
            </div>
            <div className="looking-for_tags">
                <div>iPhone</div>
                <div>Charger</div>
                <div>Gift</div>
                <div>Google Pixel 3</div>
                <div>Keyboard</div>
                <div>13 Pro Max</div>
                <div>iPhone 12</div>
                <div>Laptop</div>
                <div>Mobile</div>
            </div>
        </div>
    )
}

export default LookingFor;