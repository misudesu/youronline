import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Allprodact from './prodact/Allprodact';
import Approve from './prodact/Approve';
import Reject from './prodact/Reject';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { storage, db, auth } from "./Configer";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
export default function Prodact() {
  const auth = getAuth();
  const [user]=useAuthState(auth);
  return (
    <div className='w-full'>Prodact
    <div clasName="row">
      <div className='col-12 col-lg-12 col-md-12 '>
       <Link to="/form" ><button className='btn btn-primary items-right m-3'>Add prodact</button></Link>
      </div>
    </div>
        <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3">
      <Tab eventKey="home" title="All Prodact">
 <Allprodact/>
      </Tab>
      <Tab eventKey="manage" title="Approved">
        <Approve/>
      </Tab>
      <Tab eventKey="reffiral" title="Rejected" >  
<Reject/>
      </Tab>
    </Tabs>
    </div>
  )
}
