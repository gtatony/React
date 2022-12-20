 
import './App.css';
// import axios from 'axios';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import About from './About';
import Product from './Product';

function App() {
  

return(
  <Router>
<Link to="/">About</Link>
<Link to="/product" className='style'>Product</Link>


      <Routes>

     <Route path="/" element={<About />} />
     <Route path="/product" element={<Product />} />
   </Routes>
   </Router>

  );
}

export default App;
