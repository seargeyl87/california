import './App.css';
import Menu from './components/Menu/Menu';
import Buttom from './components/Buttom/Buttom';
import HomeWorkVika from './components/HomeWorkVika/HomeWorkVika';
import AppRouter from './components/AppRouter/AppRouter';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <div className="container">
        <Menu/>
        <AppRouter/>
        <Buttom/>
    </div>
  );
}

export default App;
