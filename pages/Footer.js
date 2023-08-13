import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
 export const Footer= () => {
  return (
    <div className=' bg-blue-500 h-[200px] w-100%  flex justify-center items-center text-white'  >
        <div >
         <h1 className='text-white 'style={{fontSize:"25px"}}><FavoriteIcon className='m-2' /> تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب الثانوية العامة و ما بعدها<FavoriteIcon className='m-2 '  /> </h1>
         <div className='flex justify-center' >
         <a className='m-2' href='#'><FacebookIcon style={{fontSize:"50px"}}/></a>
         <a className='m-2' href='#'> <YouTubeIcon style={{fontSize:"50px",color:"red"}}/></a>
         <a className='m-2' href='#'></a>
         </div>
        </div> 
    </div>
  )
}
