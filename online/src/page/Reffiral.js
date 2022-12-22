import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

import { storage, db, auth } from "../Server";
export default function Reffiral() {
  const [user]=useAuthState(auth);
  const onlineWork={
    rf:[
      {Name:"misael dessalegn",type:"Car",states:"Panding",img:""}
    ,
    {Name:"misael dessalegn",type:"Car",states:"Panding",img:""}
    ,
    {Name:"misael dessalegn",type:"Car",states:"Panding",img:""}
    ,
    ]
  }
  return (
    <div>
      <table class="table table-hover table-responsive">
  <thead>
   <tr>
    <th>Name</th>
    <th>Type</th>
    <th>States</th>
    <th>Action</th>
   </tr>
  </thead>
  <tbody>
    {onlineWork.rf.map((data,index)=>(
    <tr class="table-active">
      <td className=' '>
        <div className='flex gap-x-2 align-center'>
        <img src={data.img} className='w-10 h-10 rounded-md '/>
      <span className=" align-center py-2">{data.Name}</span>
      </div>
      </td>
      <td>{data.type}</td>
      <td>{data.states}</td>
      <td className=''>       
<Link to="/ref"><button className="btn btn-primary btn-sm">view</button></Link>
      </td>
    </tr>
    ))}
   
  </tbody>
</table>
    </div>
  )
}
 