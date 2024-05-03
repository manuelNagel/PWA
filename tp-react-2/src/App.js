import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home  from "./pages/Home/Home";
import Weather from './pages/Weather/Weather';

function App() {
  return (
    <div>
      
      
        <Routes>
          <Route path="/" element={<Home />} /> 
           <Route path="/Weather" element={<Weather />} />
           <Route path="*" element={<Home />} />
        </Routes>
      
    </div>
  );
}

export default App;
