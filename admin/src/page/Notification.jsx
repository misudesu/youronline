import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Notification() {
  const onlineWork={
    rf:[
      {Name:"Muse",states:"sent",catagory:"Notification",type:"Admin",title:"Update Application",notif:"this a link to update new vertion application"}
    ,
    {Name:"Muse",states:"sent",catagory:"Notification",type:"Admin",title:"Update Application",notif:"this a link to update new vertion application"}
    ,
    {Name:"Muse",states:"sent",catagory:"Notification",type:"Admin",title:"Update Application",notif:"this a link to update new vertion application"}
    ,
    ]
  }
  return (
    <div className='container p-4 lg:p-1'>

      <div className=' row '>
        <div className="col-12 col-lg-5 col-md-5 form-group">
        <label>Title here</label>
          <input className="form-control" type="text"/>
          <button className='btn btn-primary mt-3 item-self-right'>Send</button>
       
        </div>
        <div className='col-12 col-lg-6 col-md-6 '>
        <label>Notification</label>
          <textarea className='form-control'>

          </textarea>
   </div>
        <table class="table  mt-5 table-hover table-responsive">
  <thead>
   <tr>
    <th>Title</th>
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
      <span className=" align-center py-2">{data.Name}</span>
      </div>
      </td>
      <td>{data.type}</td>
      <td>{data.states}</td>
      <td className=''>       
<Link to={`/com`}
state={{ 
 
  name:data.Name,
 type:data.type,
 states:data.states,
 phone:data.phone,
 comment:data.notif,
 img:data.img,
 catagory:data.catagory
} }

><button className="btn btn-primary btn-sm">view</button></Link>
      </td>
    </tr>
    ))}
   
  </tbody>
</table>
      </div>
    </div>
  )
}
