import React from 'react'

export default function Form() {
  return (
    <div>
    <div className="row  g-3">
         </div>
         <h4>Prodact Information</h4>
         <div className='row gap-3 m-4'>
           
         <div class="col-lg-auto">
    <label for="price" class="">Prodact Catagory</label>
    <input type="text" class="form-control"  placeholder="Car, Home, Other,Constraction "/>
  </div>
         <div class="col-lg-auto">
    <label for="nameofhome" class="">Name of Home</label>
    <input type="text" class="form-control" id="nameofhome" placeholder="Name of Home"/>
  </div>
  
       
        <div class="col-lg-auto">
    <label for="price" class="">price</label>
    <input type="text|number" class="form-control" id="price" placeholder="Price Et,129 "/>
  </div>
  <div className='col-auto'>
                <label for='sellorrent'>Sell or Rental</label>
           <input className='form-control' placeholder='Sell'/>
            </div>
            <div className='col-12 col-lg-12 col-md-12'>
           
            <label for="discrption" class="">Details</label>
    
                <textarea className='form-control'>

                </textarea>
               
            </div>  
  </div>
  <div className='row m-5'>
    <h4>Personal Information</h4>
    <div className='col-12 col-md-6 col-lg-6'>
  <div>
  <label>Full name</label>
    <input className='form-control'/>
  </div>
  <div>
  <label>Country</label>
    <input className='form-control'/>
  </div>
  <div>
  <label>Kebele</label>
    <input className='form-control'/>
  </div>

    </div>
    <div className='col-12 col-md-6  col-lg-6'>
   <label>Phone Number</label>
    <input className='form-control'/>
    <div>
  <label>City</label>
    <input className='form-control'/>
  </div>
  <div>
  <label>Address</label>
    <input className='form-control'/>
  </div>
    </div>
    <div>
  <label>Gps link</label>
    <textarea className='form-control'></textarea>
   
   <label>Add image</label>
   {/* add image start */}
   
   <div>
              <label class="block text-sm font-medium text-gray-700">Cover photo</label>
              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            {/* arry loope */}
            <div>
<img src="" className='w-32 h-20 rounded-md bg-gray-100 outline mt-3 '/>
            </div>
        
   {/* add img end */}
   <button className='btn btn-primary mt-3  items-center'>Submite</button>
  </div>
  </div>
  
</div>

  )
}
