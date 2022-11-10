import './CatalogFilter.css';
import {useState, useEffect} from 'react';
import PostService from '../../API/PostService';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem';


function  CatalogFilter({changeChooseOzu}) {

    let [stateFilterOzy, setStateFilterOzy] = useState([]);

 
    function getFilterOzy()  {
        let response = PostService.getFilters().then((resp) => {
            setStateFilterOzy(resp.data)
        })
    }

    useEffect(() => {
        getFilterOzy()
    },[])

    return (
        <div className='catalog-filter'>
            <div className="catalog-filter-head">OZU</div>
            <div className="catalog-filter_list-checkbox">
                {stateFilterOzy.map((item) =>
                            <CheckBoxItem itemCheck={item} changeChooseOzu={changeChooseOzu}/>
                            )}
            </div>
        </div>
    )
    
}

export default CatalogFilter;