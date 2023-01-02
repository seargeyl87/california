import { Routes, Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Catalog from '../Catalog/Catalog';
import BasketPage from '../BasketPage/BasketPage';
 
 

function AppRouter() {
    return (
        
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/products/:id' element={<Catalog/>}/>  
                <Route path='/basket-page/' element={<BasketPage/>}/>              
            </Routes>
    )
    
}

export default AppRouter;