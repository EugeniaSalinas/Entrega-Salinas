import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element ={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>  
          </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
