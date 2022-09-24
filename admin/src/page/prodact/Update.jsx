import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Update(props) {
  const {username}=useLocation().state;
  const { type}=useLocation().state;
  const {  status}=useLocation().state;
  const {   phone}=useLocation().state;
  const {   name}=useLocation().state;
  const { gps}=useLocation().state;
  const {   kebele}=useLocation().state;
  const {   city}=useLocation().state;
  const {  title}=useLocation().state;
  const {   address}=useLocation().state;
  const {    country}=useLocation().state;
  const {    price}=useLocation().state;
  const {  discription}=useLocation().state;
  const {   imgs}=useLocation().state;
  
  
  
  const prodact={
    prodacts:[
      {
        name:name,title:title,status:status,gps:gps,address:address,kebele:kebele,city:city,phone:phone,country:country,price:price,username:username,type:type,discription:discription,
        imgss:[
  imgs[0],  
    ]
  }
    ]
  }
  return (
   <div>
    <div className='row px-2'>
      {prodact.prodacts.map((data,index)=>(

     <>
      <div key={index} className='col-12 col-lg-6 col-md-6'>
     

      <Carousel variant="dark" >
      {data.imgss[0].map((imgs,index)=>(
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={imgs.img}
          alt="First slide"
        />
       
      </Carousel.Item>
       ))}
    
    </Carousel>
  
    <div className='col-12 col-lg-12  col-md-12'>
      <iframe className='w-96 h-96' src={data.gps}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   
      </div>
      </div>
      <div className='col-12 col-lg-6 col-md-6'>
    <h2 className='h2'>{data.name}</h2>   
    <p>{data.price}</p> 
    <p>{data.discription}</p>
     <h4>Type</h4>
<p><li>{data.type}</li></p>
<p className='h4'>Quike information</p>
< >
<li>Full name: <span>{data.username}</span></li>
<li>Phone Number: <span>{data.phone}</span></li>
<li>Country: <span>{data.country}</span></li>
<li>City: <span>{data.city}</span></li>
<li>Kebele: <span>{data.kebele}</span></li>
<li>Address: <span>{data.address}</span></li>

</>
  <div className='flex gap-x-4 m-3'>
    <button className='bg-blue-500 text-indigo-100 hover:bg-green-600 rounded-md py-1 px-8'>Appruve</button>
    <button className='bg-gray-600 text-indigo-100 hover:bg-red-600 rounded-md py-1 px-8'>Reject</button>
  </div>
      </div>
      </>
  ))}
    </div>
   </div>
  )
}
