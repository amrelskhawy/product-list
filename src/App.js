import './App.css';

import { BrowserRouter as Router,
  Routes , Route


} from 'react-router-dom';

import AddProduct from './pages/add-product';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
