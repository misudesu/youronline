import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

import Manage from './page/Manage';
import Prodact from './page/Prodact';
import Reffiral from './page/Reffiral';
import Notification from './page/Notification';
import Comment from './page/Comment';
import Dashibord from './page/Dashibord';
import NavBar from './page/NavBar';
import Update from './page/prodact/Update';
function App() {
 
  return (
    
   

 
  <Router>
  <div className='flex   '>
  <NavBar/>
  <div className='mt-14 lg:pl-8   w-full'>
  <Routes> 
  
   <Route exact path="/" element ={<Dashibord/>} />
   <Route  path="/manage" element={<Manage/>}/>
   <Route  path="/prodact" element={<Prodact/>}/>
   <Route  path="/message" element={<Comment/>}/>
   <Route  path="/refferial" element={<Reffiral/>}/>
   <Route path="/notification" element={<Notification/>}/>
   <Route path="/key" element={<Update/>}/>
    </Routes>
    </div>
    </div>
  </Router> 


  );
}

export default App;
