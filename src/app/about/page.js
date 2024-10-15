import React from 'react'

import Image from 'next/image';

import frame from '../../../public/assests/frame.png';
import user from '../../../public/assests/user.png'
import shop from '../../../public/assests/shop.png'
import chart from '../../../public/assests/chart.png'
import style from './about.module.css'
import bg from '../../../public/assests/bg1.png'
import bg1 from '../../../public/assests/bg2.png'




export default function page() {
  return (
    <>


{/* <section className={`${style.element}`}>
<div className= {`  firstsec container  p-5 mx-auto flex  flex-col  items-center justify-center`}  dir="rtl">




<div className={``}>
<div className="flex flex-col items-center gap-8 ">
<div className=" p-5 flex  flex-col items-center  ">
  <div className="text-3xl font-bold text-center text-[#229799]"><p>ابدء الآن بإنشاء موقعك الإلكتروني
    <br/>
     مع افضل منصة عربية  </p>
     </div>

     <div className=" text-center p-3 text-gray-500 font-bold">
      <p>سهولة، سرعة، ومرونة كاملة لإنشاء موقعك الإلكتروني 
        <br/>
        بدون أي معرفة برمجية</p>


     </div>




</div>
<div>
  <Image src={frame} className="w-[20vw]"/>
</div>


</div>






</div> 

<div className=" m-9 bg-red-400 p-5">
<div className='  flex gap-10 justify-evenly items-center' >

<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
  <div>
      <p className="text-xl font-bold">200+</p>
      <p className="text-gray-400">مبيعات</p>
    </div>
    
    <div>
      <Image src={chart}
      width={50}
      
      />
    </div>
    


  </div>

<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
  <div>
      <p className="text-xl font-bold">200+</p>
      <p className="text-gray-400">متجر الكتروني</p>
    </div>
    
    <div>
      <Image src={shop}
      width={50}
      
      />
    </div>
    


  </div>



<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
<div>
    <p className="text-xl font-bold">2050+</p>
    <p className="text-gray-400">مستخدم</p>
  </div>
  
  <div>
    <Image src={user}
    width={50}
    
    />
  </div>
  


</div>



</div>




</div> 














</div>


</section> */}














    
    
    
    
    
    
    
    
    
    
    </>
  )
}
