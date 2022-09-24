import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Allprodact from './prodact/Allprodact';
import Approve from './prodact/Approve';
import Reject from './prodact/Reject';
export default function Prodact() {
  return (
    <div className='w-full'>Prodact
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
