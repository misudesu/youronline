import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

import Manage from './page/Manage';
import Prodact from './page/Prodact';
import Reffiral from './page/Reffiral';
import Notification from './page/Notification';
import Comment from './page/Comment';
import Dashibord from './page/Dashibord';
import NavBar from './page/NavBar';
import Update from './page/prodact/Update';
import Form from './page/prodact/Form';
import RefView from './page/refiral/RefView';
import Viewnotification from './page/notification/Viewnotification';
import Login from './page/Auth/Login';
import { useAuthState } from "react-firebase-hooks/auth";
import { storage, db, auth } from "./Server";
import { useState } from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import Signup from './page/Auth/Signup';
function App() {
  const auth = getAuth();

    

  const [showNav, setShowNav] = useState(true);
  const [user] = useAuthState(auth);
  console.log(auth.currentUser?.email)
  return ( 
    <> 
   
  <Router>
  {user ?(

    
      <> 
  
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
     <Route path="/form" element={<Form/>}/>
     <Route path="/ref" element={<RefView/>}/>
     <Route path="/com" element={<Viewnotification/>}/>
     <Route path="/signin" element={<Login/>}/>
      </Routes>
      </div>
      </div>
     
      </>
  )
      :
      ( <Login/> )
   
    }
  </Router> 
   
  </>

  );
}

export default App;
