import { Routes, Route} from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Catalog from '../Catalog/Catalog';



function AppRouter() {
    return (
        
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/products' element={<Catalog/>}/>                
            </Routes>
    )
    
}

export default AppRouter;