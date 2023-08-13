import React from 'react'
import { Slide } from "react-awesome-reveal";
import { JackInTheBox} from "react-awesome-reveal";
import { useUserContext } from '../context/ProjectContext';
export default function MainSection  ( )  {
   const {  } = useUserContext();  
  return (
   
      
         <div className='main bg-blue-500 p-4 h-[700px] grid grid-cols-2 mt-[50px] mb-[50px] sm: h-auto md: block h-auto '>
         <div class="first-main  bg-blue-500 p-4 ">
      <Slide >
         <div className='mt-[100px]'>
              <h1 className=' font text-5xl text-white '><span>ILearnCenter</span> منصة </h1>
            
              <h4 className='mt-6 text-2xl font text-white text-right ' style={{direction:"rtl"}}>
              ILearnCenter   هى منصة تعليمية تقدم العديد من الحلول والادوات التكنولوجية لتجربة تعليمية فريدة  حيث تمكن الطالب والمعلم من التعلم عن بعد بافضل صورة 
              </h4>

            
         </div>
        </Slide>
  
 
  </div>
  <div class=" second-main  500 p-4 flex justify-center items-center">
<JackInTheBox>
   <img src='new-droosy.png' className=''/>
</JackInTheBox>
   <img src=''/>
  </div>
    </div>
      )}
    
   
 