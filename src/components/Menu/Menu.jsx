import './Menu.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';
import ModalSearch from '../ModalSearch/ModalSearch';

function Menu() {
    let [basketCount, setBasketCount] = useState([]);
    let [modalActive, setModalActive] = useState(false);
    let [activeSearch, setActiveSearch] = useState(false)




  async  function getBasketCount() {
        let response = await axios.get("http://localhost:3000/showcase-basket").then((resp) => {
            setBasketCount(resp.data[0])
        }
        )
    }

    function closeModal() {
        setModalActive(false)
    }
    function openModal() {
        setModalActive(true)
    }

    function openModalSearch() {
        setActiveSearch(true)
    }

    function closeModalSearch() {
        setActiveSearch(false)
    }

    useEffect(() => {
        getBasketCount()
    }, []) 

    return (
        <div className="menu">
            <div className="menu_label-california"></div>
            <div className="menu_list">
                <div className="menu_list_element">all products</div>
                <div className="menu_list_element">solutions
                    <div className="menu_list_element_arrow"></div>
                </div>
                <div className="menu_list_element">about</div>
                <div className="menu_list_element">support</div>
            </div>
            <div className="menu_icons-right">
                <div className="menu_icons-right_search" onClick={openModalSearch}></div>
                <div className="menu_icons-right_basket" onClick={openModal}>
                    <div className="menu_icons-right_basket_circle">
                        {basketCount}
                    </div>
                </div>
                <Modal active={modalActive} closeModal={closeModal}/>
                <ModalSearch activeSearch={activeSearch} closeModalSearch={closeModalSearch}/>

            </div>
        </div>
    )

}

export default Menu;