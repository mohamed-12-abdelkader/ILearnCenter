import React from 'react'
import MainSection from './MainSection'
import { Footer } from './Footer'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassRoomsData } from './ClassRoomsData';

 export default function Classrooms(){
const ClassRoomsjsx=ClassRoomsData.map((Classroom)=>{
  return(
    
     <div key={Classroom.id} className='h-[380px] w-[320px]  m-5 border-2 shadow-md'>
            <img src={Classroom.imgYrl} className='h-[70%] w-[100%] '/>
            <div className='flex justify-center items-center mt-2'>
              <div className="text-center">
              <h4>{Classroom.title}</h4>
               <Button className='text-black' variant="contained"> {Classroom.title}</Button>
              </div>
              
            </div>
            
        </div>
   
  )
})
  return(
    <>
    <MainSection/>
    <div className='mb-5'>
      <div  className='font flex justify-center items-center m '>
      <h1>الصفوف الدراسية</h1>
      </div>
      
      <div>
        <div class="flex justify-center flex-wrap " style={{direction:"rtl"}}>
        {ClassRoomsjsx}
        </div>
       
      </div>
    </div>

    <Footer/>
    </>
  )
 }