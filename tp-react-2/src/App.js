import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home  from "./pages/Home/Home";
import Weather from './pages/Weather/Weather';
import Details from './pages/Details/Details';

function App() {
  
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} /> 
           <Route path="/Weather" element={<Weather />} />
           <Route path="/Weather/:city" element={<Weather />}/>
           <Route path="*" element={<Home />} />
           <Route path="/Details/:city" element={<Details/>} />
        </Routes>
    </div>
  );
}

export default App;
