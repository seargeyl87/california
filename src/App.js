import './App.css';
import Menu from './components/Menu/Menu';
import Buttom from './components/Buttom/Buttom';
import AppRouter from './components/AppRouter/AppRouter';


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
