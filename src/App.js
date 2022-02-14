import react from 'react';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import {Route,Routes,Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
