import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {HashRouter  as  Router, Route} from 'react-router-dom'
import Restaurant from './components/Restaurant';

import Orders from './components/Orders';
import Home from './components/Home';

function App() {
  return (
   
     
      <Router>
      
     <div id="bodypage" className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Restaurants" component={Restaurant}/>
      <Route exact path="/Orders" component={Orders}/>
      <Footer/>
      </div>
      
      </Router>
    
  
  );
}

export default App;
