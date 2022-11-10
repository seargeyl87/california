import CatalogFilter from '../CatalogFilter/CatalogFilter';
import './Catalog.css';
import ListProductItem from '../ListProductItem/ListProductItem';
import PostService from '../../API/PostService';
import { useState, useEffect } from 'react';


function  Catalog() {
    let [state, setState] = useState([]);
    let [chooseFilterOzy, setChooseFilterOzy] = useState([]);
 console.log(chooseFilterOzy)


    async function getProducts() {
        let response =  PostService.getIphones(12, 1, chooseFilterOzy).then((resp)=> {
            setState(resp.data)
        })
    }

    let arr = [3]; 

    function changeChooseOzu(param, bool) {
        console.log(param)
        if(bool) {
            setChooseFilterOzy([...chooseFilterOzy, param]);
        }

    }

    //console.log(arr.findIndex((item) => item===3))

    //chooseFilterOzy.splice(chooseFilterOzy.findIndex((item) => item===param)



    useEffect(() => {
        getProducts()
    },[chooseFilterOzy])

    return (
        <div className="catalog">
            <div className="catalog_list-filters">
                    <CatalogFilter changeChooseOzu={changeChooseOzu}/>
            </div>
            <div className="catalog_list-product">
                {state.map((item, index) =>
                 <ListProductItem itemProduct={item} key={index}/>               
                )} 
            </div>
        </div>
    ) 
}

export default Catalog;