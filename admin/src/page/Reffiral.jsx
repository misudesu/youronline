import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

import { storage, db, auth } from "./Configer";
export default function Reffiral() {
  const [user]=useAuthState(auth);
  const onlineWork={
    rf:[
      {Name:"misael dessalegn",type:"Car",states:"Panding",img:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png"}
    ,
    {Name:"misael dessalegn",type:"Car",states:"Panding",img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"}
    ,
    {Name:"misael dessalegn",type:"Car",states:"Panding",img:"https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg"}
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
 