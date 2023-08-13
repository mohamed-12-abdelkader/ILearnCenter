import React from 'react'
import { Slide } from "react-awesome-reveal";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ModeIcon from '@mui/icons-material/Mode';
export const TeacherServices = () => {
  return (
    <div className='container h-[450px] grid grid-cols-3 sm: q h-auto'>
         <div className='  col-span-1 flex justify-center items-center'>
            <Slide >
             <img src='image-home-2.png'/>
             </Slide>
         </div>
     
         <div className='rtl col-span-2 col-span-2'>
         
            <div className='flex justify-center m-5'>
               <h1 className='font text-3xl'> <ModeIcon style={{color:"#3b82f6"}}/>ماذا نقدم للمدرس </h1>
            </div>

             <div style={{direction:"rtl",marginTop:"70px"}} className='mt-30'> 
              <Slide direction='right'>
                <ul className='mr-20'>
                    <li className='text-2xl m-5 font'>إنشاء مجموعات دراسية جماعية للطلبة والتواصل المباشر معهم من خلال الفيديوهات المسجلة او حصص البث المباشر. </li>
                    <li className='text-2xl m-5 font'>الدعم الفني للحصص التعليمية قبل واثناء وبعد الحصة الدراسية.                                               </li>
                    <li className='text-2xl m-5 font'>توفير المنصة للمدرس التدريب مما يطور من مهارتهم للقيام بعملية التعليم عن بعد                            </li>
                    <li className='text-2xl m-5 font'>توفر المنصة بيئة تدريس تفاعلية مجهزة بأحدث الأدوات                                                             </li>
                    <li className='text-2xl m-5 font'>إدارة المنصة من الناحية التقنية وإدارة المحتوى  .                                                              </li>
                </ul>
                </Slide>
             </div>


          
         </div>
        
    </div>
  )
}
