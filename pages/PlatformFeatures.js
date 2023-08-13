import React from 'react'
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import CastConnectedSharpIcon from '@mui/icons-material/CastConnectedSharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LanguageIcon from '@mui/icons-material/Language';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Slide } from "react-awesome-reveal";
export const PlatformFeatures = () => {
  return (
    <div className='mt-[80px] h-[1000px] '>
       <div className='flex justify-center m-5'>
         <h1 className='font text-4xl '>مميزات المنصة </h1>
       </div>
      
      <div  >
    
        <div>
            <Slide direction='right' duration="2000">
        <div className='flex mt-10  flex-wrap ml-30 h-[400px]'>


           <div className='h-[250px] w-[400px] text-center p-10'>
           <div className='img h-[100px] flex justify-center items-center'>
           <ImportantDevicesSharpIcon style={{color:"#3b82f6" ,fontSize:"50px"}} />
             </div>
             <h1 className='font  mt-5'>سهولة الاستخدام </h1>
               
             <p className='mt-5'>
امكانية استخدام المنصة من خلال جميع الاجهزة الالكترونية من خلال المتصفح</p>
           </div>


           <div className='h-[250px] w-[400px] text-center p-10'>
               <div className='img h-[100px] flex justify-center items-center'>
               <AutoStoriesSharpIcon style={{color:"#3b82f6" ,fontSize:"50px"}}/>
                 </div>
                 <h1 className='font  mt-5'>التعدد فى الدروس</h1>
                 <p className='mt-5'>إمكانية تصميم الدروس بطرق متعددة</p>
           </div>


           <div className='h-[250px] w-[400px]  text-center p-10'>
                 <div className='img h-[100px] flex justify-center items-center'>
                  <CastConnectedSharpIcon style={{color:"#3b82f6" ,fontSize:"50px"}}/>
                   </div>
                   <h1 className='font  mt-5'>واجهة احترافية</h1>
                   <p className='mt-5'>توفر المنصة واجهة احترافية تتمتع بسهولة الاستخدام الامن للمدرس والطالب </p>
          </div>
          </div>
          </Slide>
              <Slide duration="2000">
   <div className='flex   flex-wrap ml-30 '>


         <div className='h-[250px] w-[400px]  text-center p-10'>
               < div className='img h-[100px] flex justify-center items-center'>
                 <BorderColorIcon style={{color:"#3b82f6" ,fontSize:"50px"}}/>
                 </div>
                 <h1 className='font  mt-5'>الارشيف</h1>
                 <p className='mt-5'>الاحتفاظ بمحتويات الدروس السابقة والرجوع اليها في أي وقت</p>
           </div>


           <div className='h-[250px] w-[400px]  text-center p-10'>
               <div className='img h-[100px] flex justify-center items-center'>
                 <QuestionMarkIcon style={{color:"#3b82f6" ,fontSize:"50px"}}/>
                 </div>
                 <h1 className='font  mt-5'>بنك الاسئلة  </h1>
                 <p className='mt-5'> 
بنك أسئلة لكل مادة مربوط بصوره تلقائية بالكويزات والاختبارات يمكن للمدرس من اعدادها بسهولة كما تدعم الاختيار اليدوي او التلقائي للأسئلة.</p>
           </div>

           <div className='h-[250px] w-[400px]  text-center p-10'>
                 <div className='img h-[100px] flex justify-center items-center'>
                   <LanguageIcon style={{color:"#3b82f6" ,fontSize:"50px"}}/>
                   </div>
                   <h1 className='font  mt-5'>التوافق مع المتصفحات المختلفة</h1>
                   <p className='mt-5'>المنصة متوافقة مع جميع المتصفحات </p>
           </div>
    </div> 
    </Slide>      
    </div>
      </div>
    </div>
  )
}
