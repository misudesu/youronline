import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function Update() {
  return (
    <main className=''>
      <div class="bg-white">
    <div class="pt-6">
    
      {/* <!-- Image gallery --> */}
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    
       
        <div class="aspect-w-1 aspect-h-1 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:h-80">
        <Carousel variant="dark">
      <Carousel.Item>
        <img
        class="h-full w-full object-cover object-center"
          src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
       class="h-full w-full object-cover object-center"
          src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
       class="h-full w-full object-cover object-center"
          src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
    
        </div>
         
      </div>
  
     {/* <!-- Product info --> */}
     <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
        </div>
  
        {/* <!-- Options --> */}
        <div class="mt-4 lg:row-span-3 lg:mt-0">
        
          <p class="text-3xl tracking-tight text-gray-900">$192</p>
  
          {/* <!-- Reviews --> */}
 
            <button type="submit" class="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Apperuved</button>
            <button type="submit" class="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Reject</button>
          
        </div>
  
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          {/* <!-- Description and details --> */}
         
  
          <div class="">
            <h3 class="text-sm font-medium text-gray-900">Quick Facts</h3>
  
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
  
       </ul>
            </div>
          </div>
  
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>
  
            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  </div>
</main>
  )
}
