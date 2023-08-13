import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { JackInTheBox } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
export const StudentServices = () => {
  return (
    <div className='h-[auto] mt-[80px] grid grid-cols-2'>
     
     <div className='rtl '>

        <div className='flex justify-center m-5'>
            <h1 className='font text-3xl'> <SchoolIcon style={{color:"#3b82f6"}}/> ماذا نقدم للطالب  </h1>
        </div>

        <div  style={{direction:"rtl",marginTop:"70px"}}>
      <Slide>    
       <ul className='mr-20'>
        <li className='text-2xl m-5 font'>تجربة امنة </li>
        <li className='text-2xl m-5 font'>تغطية المناهج بشكل كامل</li>
        <li className='text-2xl m-5 font'> تضمن المنصة للطالب خصوصية محكمة </li>
        <li className='text-2xl m-5 font'>تعليم تفاعلى </li>
        <li className='text-2xl m-5 font'> امتحانات مستمرة لتقييم مستوى الطالب</li>
        <li className='text-2xl m-5 font'> متابعة مستمرة مع الطالب </li>
        <li className='text-2xl m-5 font'>جودة تصوير عالية للمحاضرات </li>
        <li className='text-2xl m-5 font'>مدرسين على اعلى مستوى </li>
        
       </ul>
       </Slide>  
        </div>

     </div>

    <div className=' flex justify-center items-center'>
        <JackInTheBox>
       <img src='new-droosy.png'/>
       </JackInTheBox>
    </div>

    </div>
  )
}

