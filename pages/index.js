import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainSection from './MainSection'
import { TeacherServices } from './TeacherServices'
import {StudentServices} from './StudentServices'
import { PlatformFeatures } from './PlatformFeatures'
import { Footer } from './Footer'
import { useUserContext } from './context/ProjectContext'

export default function Home() {
  const {handleAppClick}=useUserContext();
  return (
    <div id="scroll-marker" className="h-0" onClick={handleAppClick}>
       <div id="scroll-marker" className="h-0">
      <MainSection/>
      <TeacherServices/>
     <StudentServices/>
     <PlatformFeatures/>
     <Footer/>
      </div>
    </div>
  )
}
