import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Comment() {
  const onlineWork={
    rf:[
      {Name:"misael dessalegn",catagory:"Comment",type:"user",states:"new",phone:"0994508849",comment:"this is my comment",img:"https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=170667a&w=0&h=qcveK8RhZyUglSueV-X-aiFTnZCn4y5z13TgPckiYjw="}
    ,
    {Name:" keb dessalegn",catagory:"Comment",type:"user",states:"new",phone:"0928700105",comment:"this is my comment",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkcM_fDnjZ3QZIRoAvz8FLhQXV8smU104_lhlIUVedg942TmIJgqgTmfrBIKrW_aXl1I&usqp=CAU"}
    ,
    {Name:"misu desu",catagory:"Comment",type:"User",states:"viewed",phone:"0994508849",comment:"this is my comment",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTQkKDwC8bKOhUPTAqIlkNlesJuHZN4pBpQ&usqp=CAU"}
    ,
    ]
  }
  return (
    <div>Comment

<table class="table mt-1 pr-5 table-hover table-responsive">
  <thead>
   <tr>
    <th>User</th>
    <th>Type</th>
    <th>States</th>
    <th>Action</th>
   </tr>
  </thead>
  <tbody>
    {onlineWork.rf.map((data,index)=>(
    <tr class="table-active" key={index}>
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
  comment:data.comment,
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
  )
}
