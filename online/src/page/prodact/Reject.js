import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Server";
export default function Reject() {
  const [Rejected,setRejected]=useState([]);
  useEffect(() => {
    const prodactRef = collection(db, "Prodact");
    const q = query(prodactRef,  where("Status", "==", "Rejected"));  onSnapshot(q, (snapshot) => {
      const prodact = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRejected(prodact);
  }, []);
});
  return (
  
    <div className='row'>
       <div className='col-12'>
       <table className="table">
  <thead>
    <tr>
    <th scope='col '>Name</th>
                    <th  scope='col'>title</th>
                    <th scope='col'>status</th>
                    <th scope='col'>Role</th>
                    <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
   
  {Rejected.map(({id,
    UserName,
    Phone,
    Category,
    Type,
    Status,
    Name,
    Gps,
    Kebele,
    City,
    Address,
    Country,
    Price,
    Discrption,
    Image,}
    )=>(
      <tr key={id} className="mx-auto">
                   
      <td>
     <div className='flex flex-cols-2 gap-x-1 lg:gap-x-4'>
    <div >
 
    <img className='h-8 w-32 rounded-full  lg:w-10 lg:h-10 h-full w-full object-cover object-center' src={auth.currentUser?.photoURL}/>

    </div>
   
   <div>  
       <span className='text-sm lg:text-lg'>{UserName}</span>
      <p className='text-gray-500 text-sm lg:text-lg'>{Phone}</p>
      </div>
     </div>
     </td>

     <td>
<div>  
       <span>{Category}</span>
      <p className='text-gray-500'>{Type}</p>
      </div>
     </td>
    <td>
      <div className='lg:bg-blue'>
          <p>{Status}</p>
      </div>
    </td>
     <td>
      <Link to={`/key`}
      state={{ 
username:UserName,
type:Type,
states:Status,
phone:Phone,
name:Name,
gps:Gps,
kebele:Kebele,
city:City,
title:Category,
address:Address,
country:Country,
price:Price,
discription:Discrption,
imgs:Image,
id:id,
} }
      >Edit</Link>
     </td>
  </tr>
   ) )}
  </tbody>
</table>
   
      </div>
    </div>
  )
}
