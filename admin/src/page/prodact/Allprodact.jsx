import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Allprodact() {
    // const prodact={
    //     request:[{img:"https://th.bing.com/th/id/OIP.ulpqNUU-d-TvNE42yOwONAHaJ4?pid=ImgDet&rs=1",name:"misael",email:"misu@gmail.com",catagory:"Car",type:"sell",status:"Pending...",role:"Member",key:"/key"},
    //     {img:"https://live.staticflickr.com/633/22319718754_eee9b0bc02.jpg",name:"dessalegn",email:"desu@gmail.com",catagory:"Home",type:"rental",status:"Pending...",role:"Admin",key:"/key"},
    //     {img:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",name:"muse",email:"nahi@gmail.com",catagory:"Mashin",type:"sell",status:"Pending...",role:"Member",key:"/key"},
    //     {img:"https://th.bing.com/th/id/R.62319a842e93ba3e13d563116e020328?rik=jFgF1UnCpKrJ8g&riu=http%3a%2f%2ffarm2.static.flickr.com%2f1306%2f1359551669_fa409bc3f3_b.jpg&ehk=eNn6m7aCOEpEothguT0S0%2fjzRLdVyB0Od1fc57pH6g0%3d&risl=&pid=ImgRaw&r=0",name:"kebi",email:"yoyo@gmail.com",catagory:"Car",type:"ental",status:"Pending...",role:"Member",key:"/key"},
    // ]
    // }
    const prodact={
      prodacts:[
        {
          name:"Toyotal 4D",title:"car",status:"pending...",gps:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7910.395533545923!2d37.84987607150144!3d7.553402263982304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x17b237cca06dad45%3A0x89721c4515b707f5!2z4YiG4Yij4YuV4YqTLCDhiqLhibXhi67hjLXhi6s!3m2!1d7.5531942!2d37.8618422!4m5!1s0x17b237cc12e1dbcb%3A0xfb2200c10538baa!2zSFIyVytDTVIgSG9zc2FuYSBIb3NwaXRhbCwg4YiG4Yij4YuV4YqT!3m2!1d7.5511247!2d37.8466356!5e0!3m2!1sam!2set!4v1663925523320!5m2!1sam!2set",address:"ke kalehiywet jerba",kebele:"sech duna",city:"hossana",phone:"+251994508849",country:"ethiopia",price:"$2,500,000",username:"misael dessalegn",type:"Sell",discription:"Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional payments each time you use that content. It's a win-win, and it's why everything on iStock is only available royalty-free — including all Car images and footage.",profile:"https://th.bing.com/th/id/R.a54eec64225276db6e79c3098bedc4f8?rik=Hmg2JFyp%2bU0vtA&pid=ImgRaw&r=0",
           
          imgs:[
            {img:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=170667a&w=0&h=SalbVATc6-d80ErakjYtLKF8XTLGS4Fj1b5PjTKEfnE="},
          {img:"https://media.istockphoto.com/photos/illustration-of-generic-red-suv-on-white-background-picture-id956052998?k=20&m=956052998&s=612x612&w=0&h=X_fYz-06EjhkpDKsJDxvQDv_W5J3xPJDbrYCuM2rAIg="},
  ]},
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
   
    {prodact.prodacts.map((data,index)=>
                <tr key={index} className="mx-auto">
                   
                    <td>
                   <div className='flex flex-cols-2 gap-x-1 lg:gap-x-4'>
                  <div >
               
                  <img className='h-8 w-32 rounded-full  lg:w-10 lg:h-10 h-full w-full object-cover object-center' src={data.profile}/>
            
                  </div>
                 
                 <div>  
                     <span className='text-sm lg:text-lg'>{data.username}</span>
                    <p className='text-gray-500 text-sm lg:text-lg'>{data.phone}</p>
                    </div>
                   </div>
                   </td>

                   <td>
<div>  
                     <span>{data.title}</span>
                    <p className='text-gray-500'>{data.type}</p>
                    </div>
                   </td>
                  <td>
                    <div className='lg:bg-blue'>
                        <p>{data.status}</p>
                    </div>
                  </td>
                   <td>
                    <Link to={`/key`}
                    state={{ 
 username:data.username,
type:data.type,
states:data.status,
phone:data.phone,
name:data.name,
gps:data.gps,
kebele:data.kebele,
city:data.city,
title:data.title,
address:data.address,
country:data.country,
price:data.price,
discription:data.discription,
imgs:[data.imgs],
} }
                    >Edit</Link>
                   </td>
                </tr>
                  )}
  </tbody>
</table>
           
                  
            </div>
    </div>
  )
}
