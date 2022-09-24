import React from 'react'
import  Chart  from "react-google-charts"
export default function Dashibord() {
   const datas = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
   const optionss = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

   const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
   const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  return (
    <div className='container'>
<div>
  <h5 className="text-sm font-bold">Hi Welcome Back!</h5>
  <p className="text-sm">JustDo Dashboard,</p>
</div>
       <div className='row container align-items-center g-4'>
        <div className='col-6 col-lg-3 col-md-3  '>
<div className='bg-indigo-100 hover:bg-blue-100 card container'>
<p className="mb-0">Number of prodact</p>
<p className=' text-xl font-bold'>34040</p>
</div>
        </div>
        <div className='col-6 col-lg-3 col-md-3'>
        <div className='bg-indigo-100 hover:bg-blue-100 card container'>
<p className="mb-0">Number of Home</p>
<p className=' text-xl font-bold'>34040</p>
</div>
        </div>
        <div className='col-6 col-lg-3 col-md-3'>
        <div className='bg-indigo-100 hover:bg-blue-100 card container'>
<p className="mb-0">Number of Car</p>
<p className=' text-xl font-bold'>34040</p>
</div>
        </div>
        
        <div className='col-6  col-lg-3 col-md-3'>
        <div className='bg-indigo-100 hover:bg-blue-100 card container'>
<p className="mb-0 text-sm lg-text-">Number of other</p>
<p className=' text-xl font-bold'>34040</p>
</div>
        </div>
        </div> 
        {/* performance */}
        <div className='row container bg-blue-400 text-light mt-4'>
          <p>Performance Overview</p>
<div className='col-12 col-lg-4 col-md-4'>
<div className='flex gap-x-1'>
<div>
<img src="https://img.icons8.com/clouds/100/000000/user.png" className='w-32 h-14'/>
</div>
<div> 
<div className='flex gap-x-1 '>
<p>User</p>
<h5>+34040</h5>
</div>
<p className='text-justify text-sm'>The total number of sessions with in data range. 
  it is the period time a user is actively engaged with your app. 
</p>
</div>
</div>

</div>
{/*  */}
<div className='col-12 col-lg-4 col-md-4'>
<div className='flex gap-x-1'>
<div>
<img src="https://img.icons8.com/fluency/48/000000/filled-sent.png" className='w-32 h-14'/>

</div>
<div> 
<div className='flex gap-x-1 '>
<p>Refferal</p>
<h5>+34040</h5>
</div>
<p className='text-justify text-sm'>The total number of sessions with in data range. 
  it is the period time a user is actively engaged with your app. 
</p>
</div>
</div>

</div>
{/*  */}
<div className='col-12 col-lg-4 col-md-4'>
<div className='flex gap-x-1'>
<div>
<img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Comment-round-icons-others-inmotus-design-8.png" className='w-32 h-14'/>
</div>
<div> 
<div className='flex gap-x-1 '>
<p>Comment</p>
<h5>+34040</h5>
</div>
<p className='text-justify text-sm'>The total number of sessions with in data range. 
  it is the period time a user is actively engaged with your app. 
</p>
</div>
</div>

</div>
{/*  */}
        </div>
        <div className="row mt-4 justify-center container">
         <div className="mb-4 mr-4 lg:pr-4 col-12 col-lg-6 col-md-6 card">
<p>Order and Downloads</p>
<p className='text-sm '>The total number of sessions with in data range. 
  it is the period time a user is actively engaged with your app.</p>
      <div className='flex gap-x-4'>
        <p>Order Value</p>
        <p>Order</p>
        <p>Users</p>
        </div>  

        <div className='flex gap-x-12'>
        <p>12.3K</p>
        <p>14K</p>
        <p>71.56%</p>
        </div> 
        <Chart
      chartType="Bar"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
         </div>
 <div className=" mb-4 mr-4 lg:pr-4 col-12 col-lg-5 col-md-6 card">
 <p>Seles Report</p>  
 <p className='text-sm '>The total number of sessions with in data range. 
  it is the period time a user is actively engaged with your app.</p>
  <Chart
      chartType="LineChart"
      width="100%"
      height="200px"
      data={[
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
      ]}
      options={optionss}
    />
         </div>
        </div>
    </div>
    
  )
}
