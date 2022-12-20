 
import './App.css';
// import axios from 'axios';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import About from './About';
import Products from './Products';

function App() {
  

return(
  <Router>
    <nav>
<Link to="/">About</Link>
<Link to="/product" >Product</Link>
</nav>

      <Routes>

     <Route path="/" element={<About />} />
     <Route path="/product" element={<Products />} />
   </Routes>
   </Router>

  );
}

export default App;
