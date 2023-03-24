
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/hero' element={<Hero/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
