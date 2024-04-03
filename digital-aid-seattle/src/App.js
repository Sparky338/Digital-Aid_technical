import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Donation from './components/donation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' exact = {true} element = {<Homepage />} />
        <Route path = '/donation' element = {<Donation />} />
        {/* <Route path = '/distribution' element = {<Distribution />} /> */}
        {/* <Route path = '/inventory' element = {<Inventory />} /> */}
        {/* <Route path = '/donators' element = {<Donators />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
