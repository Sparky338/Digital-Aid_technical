import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Donation from './components/donation';
import Distribution from './components/distribution';
import Inventory from './components/inventory';
import Donors from './components/donors';
import NavBar from './components/navbar';
import Page404 from './components/404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' exact = {true} element = {<Homepage />} />
        <Route path = '/donation' element = {<Donation />} />
        <Route path = '/distribution' element = {<Distribution />} />
        <Route path = '/inventory' element = {<Inventory />} />
        <Route path = '/donors' element = {<Donors />} />
        <Route path = '*' element = {<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
