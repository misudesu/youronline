import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import {  db, auth } from "../Server";
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
export default function Notification() {
  const [user] = useAuthState(auth);
const [formData,setformData]=useState({
  title:'',
  message:'',
})
const [message,setMessage]=useState([])
const handleChange = (e) => {
  setformData({ ...formData, [e.target.name]: e.target.value });
};
const articleRef = collection(db, "Notification");
  const notify=()=>{
    
    addDoc(articleRef, {
title:formData.title,
message:formData.message,
sender:"Admin",
  Status:'New',  
   createdAt: Timestamp.now().toDate(),
     })
       .then(() => {
         alert("message sent  successfully ", { type: "success" });
   
       })
       .catch((err) => {
         alert("message not sent successfully", { type: "error" });
       });
  }

  useEffect(() => {

    const q = query(articleRef , orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessage(message);
     
    });
   
  }, []);

  
  return (
    <div className='container p-4 lg:p-1'>

      <div className=' row '>
        <div className="col-12 col-lg-5 col-md-5 form-group">
        <label>Title here</label>
          <input className="form-control" type="text"  name="title" onChange={(e) => handleChange(e)}  />
          <button className='btn btn-primary mt-3 item-self-right'  onClick={notify}>Send</button>
       
        </div>
        <div className='col-12 col-lg-6 col-md-6 '>
        <label>Notification</label>
          <textarea className='form-control' name="message"
         onChange={(e) => handleChange(e)}
          >

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
    {message?.map((data,index)=>(
    <tr class="table-active">
      <td className=' '>
        <div className='flex gap-x-2 align-center'>
      <span className=" align-center py-2">{data.title}</span>
      </div>
      </td>
      <td>{data.sender}</td>
      <td>{data.Status}</td>
      <td className=''>       
<Link to={`/com`}
state={{ 
  name:data.title,
 type:data.sender,
 states:data.Status,
 phone:data.phone,
 comment:data.message,
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
