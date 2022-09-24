import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Viewnotification(props) {
  const {name}=useLocation().state;
  const {phone}=useLocation().state;
  const {img}=useLocation().state;
  const {comment}=useLocation().state;
  const {type}=useLocation().state;
  const {catagory}=useLocation().state;
  return (
    <div>

<div className="col-12 shadow mb-8 col-lg-10 col-md-10 px-5 py-3  text-justify">
            <h5> {catagory}<span className='bg-green-200 px-3 '>{type}</span></h5>
            <span className="flex gap-x-4">
          {img ?<img src={img} className='rounded-full w-32 h-32  object-cover object-center '/>
          : <img src={img} className='rounded-full w-32 h-32 hidden object-cover object-center '/>}  
            {comment}
</span>
            </div>
            <div className="col-12 align-self-center  text-center col-lg-12 col-md-12 mb-5">
   <p >{name} {phone?<span className="bg-orange-200 px-5">{phone}</span>: ""} </p>
        </div>
    </div>
  )
}
