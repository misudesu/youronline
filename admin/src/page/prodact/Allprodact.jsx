import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Allprodact() {
    const prodact={
        request:[{img:"https://th.bing.com/th/id/OIP.ulpqNUU-d-TvNE42yOwONAHaJ4?pid=ImgDet&rs=1",name:"misael",email:"misu@gmail.com",catagory:"Car",type:"sell",status:"Pending...",role:"Member",key:"/key"},
        {img:"https://live.staticflickr.com/633/22319718754_eee9b0bc02.jpg",name:"dessalegn",email:"desu@gmail.com",catagory:"Home",type:"rental",status:"Pending...",role:"Admin",key:"/key"},
        {img:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",name:"muse",email:"nahi@gmail.com",catagory:"Mashin",type:"sell",status:"Pending...",role:"Member",key:"/key"},
        {img:"https://th.bing.com/th/id/R.62319a842e93ba3e13d563116e020328?rik=jFgF1UnCpKrJ8g&riu=http%3a%2f%2ffarm2.static.flickr.com%2f1306%2f1359551669_fa409bc3f3_b.jpg&ehk=eNn6m7aCOEpEothguT0S0%2fjzRLdVyB0Od1fc57pH6g0%3d&risl=&pid=ImgRaw&r=0",name:"kebi",email:"yoyo@gmail.com",catagory:"Car",type:"ental",status:"Pending...",role:"Member",key:"/key"},
    ]
    }
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
   
    {prodact.request.map((data,index)=>
                <tr key={index} className="mx-auto">
                   
                    <td>
                   <div className='flex flex-cols-2 gap-x-1 lg:gap-x-4'>
                  <div >
                  <img className='h-8 w-32 rounded-full  lg:w-10 lg:h-10 h-full w-full object-cover object-center' src={data.img}/>
                  </div>
                 
                 <div>  
                     <span className='text-sm lg:text-lg'>{data.name}</span>
                    <p className='text-gray-500 text-sm lg:text-lg'>{data.email}</p>
                    </div>
                   </div>
                   </td>

                   <td>
<div>  
                     <span>{data.catagory}</span>
                    <p className='text-gray-500'>{data.type}</p>
                    </div>
                   </td>
                  <td>
                    <div className='lg:bg-blue'>
                        <p>{data.status}</p>
                    </div>
                  </td>
                   <td>
                    <Link to={data.key}>Edit</Link>
                   </td>
                </tr>
                  )}
  </tbody>
</table>
           
                  
            </div>
    </div>
  )
}
