import React,{useState,useEffect} from 'react'
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../Server";
export default function Form() {
  const [formData,setformData] =useState({
    name:'',
    Category:'',
    status:'Pending...',
    gps:'',
    address:'',
    kebele:'',
    city:'',
    phone:'',
    country:'',
    price:'',
    username:'',
    type:'',
    discription:'',
    Uid:'',
    shoping:'0 ETB',
    image:[],
image1:'',
image2:'',
  })
  const handleImageChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.files[0] });
    console.log(formData.image[0])
  };
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePublish = () => {
  const storageRef = ref(
    storage,
    `/prodact/${Date.now()}${formData.image1.name}`
  );
  const storageRef1 = ref(
    storage,
    `/prodact/${Date.now()}${formData.image2.name}`
  );
  const uploadImage1 = uploadBytesResumable(storageRef, formData.image1);
  const uploadImage2 = uploadBytesResumable(storageRef1, formData.image2);
   uploadImage1.on(
    "state_changed",
    (snapshot) => {
      const progressPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      //setProgress(progressPercent);
    },
    (err) => {
      console.log(err);
    },
    () => {
      uploadImage2.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          //setProgress(progressPercent);
        },
        (err) => {
          console.log(err);
        },
        () => {
  getDownloadURL(uploadImage1.snapshot.ref).then((url1) => {
    getDownloadURL(uploadImage2.snapshot.ref).then((url2) => {
        const articleRef = collection(db, "Prodact");
       addDoc(articleRef, {
    Category:formData.Category,
    Discrption:formData.discription,
     Name:formData.name,
     GPS:formData.gps,
     Address:formData.address,
     Kebele:formData.kebele,
     City:formData.city,
     Phone:formData.phone,
     Country:formData.country,
     Price:formData.price,
     UserName:formData.username,
     Type:formData.type,
     Uid:auth.currentUser?.uid,
     Shoping:formData.shoping,
     Image:[{image:url1},{image:url2}],
     Status:formData.status,  
      createdAt: Timestamp.now().toDate(),
        })
          .then(() => {
            alert("Article added successfully", { type: "success" });
           // setProgress(0);
          })
          .catch((err) => {
            alert("Error adding article", { type: "error" });
          });
          //
        });
   //
      });
      //
    }
    );
    //
    }
    );
  }   
   
  return (
    <div>
    <div className="row  g-3">
         </div>
         <h4>Prodact Information</h4>
         <div className='row gap-3 m-4'>
           
         <div class="col-lg-auto">
    <label for="price" class="">Prodact Catagory</label>
    <select className="form-select" name="Category"   
               value={formData.Category}
               onChange={(e) => handleChange(e)}>
                
                <option >Choose...</option>
                <option>Home </option>
                <option>Car </option>
                <option>Constraction </option>
                <option>Other </option>
              </select>
  </div>
         <div class="col-lg-auto">
    <label for="nameofhome" class="">Name of Home</label>
    <input  onChange={(e) => handleChange(e)} type="text" name="name" class="form-control" id="nameofhome" placeholder="Name of Home"/>
  </div>
  
       
        <div class="col-lg-auto">
    <label for="price" class="">price</label>
    <input  onChange={(e) => handleChange(e)} type="text|number" class="form-control" name="price" placeholder="Price Et,129 "/>
  </div>
  
  <div className='col-auto'>
                <label for='sellorrent'>Sell or Rental</label>
           <input  onChange={(e) => handleChange(e)} name="type" className='form-control' placeholder='Sell'/>
            </div>
            <div className='col-12 col-lg-12 col-md-12'>
           
            <label for="discrption" class="">Details</label>
    
                <textarea   onChange={(e) => handleChange(e)} name="discription" className='form-control'>

                </textarea>
               
            </div> 
            <div class="col-lg-auto">
    <label for="price" class="">Shoping</label>
    <input  onChange={(e) => handleChange(e)} type="text|number" class="form-control" name="shoping" placeholder="Price Et,129 "/>
  </div> 
  </div>
  <div className='row m-5'>
    <h4>Personal Information</h4>
    <div className='col-12 col-md-6 col-lg-6'>
  <div>
  <label>Full name</label>
    <input  onChange={(e) => handleChange(e)} name="username" className='form-control'/>
  </div>
  <div>
  <label>Country</label>
    <input  onChange={(e) => handleChange(e)} name="country" className='form-control'/>
  </div>
  <div>
  <label>Kebele</label>
    <input  onChange={(e) => handleChange(e)} name="kebele" className='form-control'/>
  </div>

    </div>
    <div className='col-12 col-md-6  col-lg-6'>
   <label>Phone Number</label>
    <input  onChange={(e) => handleChange(e)} name="phone" className='form-control'/>
    <div>
  <label>City</label>
    <input  onChange={(e) => handleChange(e)} name="city" className='form-control'/>
  </div>
  <div>
  <label>Address</label>
    <input  onChange={(e) => handleChange(e)} name="address" className='form-control'/>
  </div>
    </div>
    <div>
  <label>Gps link</label>
    <textarea  onChange={(e) => handleChange(e)} name="gps" className='form-control'></textarea>
   
   <label>Add image</label>
   {/* add image start */}
   
   <div>
              <label class="block text-sm font-medium text-gray-700">Cover photo</label>
              {/* <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
           
                      <input id="file-upload" multiple name="image" type="file" class="sr-only" 
                       accept="image/*"
                       onChange={handleImageChange}
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div> */}
            </div>
            {/* arry loope */}
            {/* {formData.image.map((data,index)=>(
              
            <div  key={index}>
               <img src={data} className='lg:flex w-32 h-20 rounded-md bg-gray-100 outline mt-3 '/> 
          <p></p>
            </div>
             ))} */}
        
   {/* add img end */}
   <div className="row">
   <div className="col-md-6">       
                         <small id="helpId" className="form-text text-muted">Image 1 </small>
                         <input type="file"
                           className="form-control" name="image1" id="" aria-describedby="helpId" 
                           accept="image/*"
                           onChange={(e) => handleImageChange(e)}  
                        />
                       
                         </div>
                         <div className="col-md-6">       
                         <small id="helpId" className="form-text text-muted">Image 2</small>
                         <input type="file"
                           className="form-control" name="image2" id="" aria-describedby="helpId" 
                           accept="image/*"
                           onChange={(e) => handleImageChange(e)}  
                        />
                       
                         </div>
                         </div>
                       
                       
              
   <button onClick={ handlePublish} className='btn btn-primary mt-3  items-center'>Submite</button>
  </div>
  </div>
  
</div>

  )
}
