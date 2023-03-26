
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/form/Form';
import Home from './pages/Home';
import Details from './pages/DetailsCard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/form' element={<Form/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
