import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where } from "firebase/firestore";
import { db,  } from "../Server";
export default function Comment() {
  const [comment,setComment]=useState(null);
  useEffect(() => {
    const prodactRef = collection(db, "message");
    const q = query(prodactRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComment(message);
     
    });
   
  }, []);


  const onlineWork={



    rf:[
      {Name:"misael dessalegn",catagory:"Comment",type:"user",states:"new",phone:"0994508849",comment:"this is my comment",img:""}
    ,
    {Name:" keb dessalegn",catagory:"Comment",type:"user",states:"new",phone:"0928700105",comment:"this is my comment",img:""}
    ,
    {Name:"misu desu",catagory:"Comment",type:"User",states:"viewed",phone:"0994508849",comment:"this is my comment",img:""}
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
    {comment?.map((data,index)=>(
    <tr class="table-active" key={index}>
      <td className=' '>
        <div className='flex gap-x-2 align-center'>
      <span className=" align-center py-2">{data.userName}</span>
      </div>
      </td>
      <td>{data.type}</td>
      <td>{data.States}</td>
      <td className=''>       
<Link to={`/com`}
state={{ 
   name:data.userName,
  type:data.type,
  states:data.states,
  phone:data.phone,
  comment:data.feedBack,
  img:'',
  catagory:"Comment"
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
