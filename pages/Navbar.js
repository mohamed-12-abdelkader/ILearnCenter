import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isScrolled ? 'bg-white shadow-md' : 'bg-blue-500';
  const linkClass = isScrolled ? 'text-black hover:underline' : 'text-white hover:underline';
 const logoClass= isScrolled?'text-black':'text-white'

  return (
    <nav className={`  fixed top-0 left-0 right-0 p-4 flex justify-between items-center ${navClass} `} style={{zIndex:"1000"}}>
      
      <div className="flex items-center space-x-4">
        
        <img src='logo.jpg' className='h-[50px] ' />
       
        
        
      </div>
      <div className="space-x-4 mr-10">
       
        <Button variant="contained" className='font '> <Link href="/SingUp" >  إنشاء حساب </Link> </Button> 
        <Button variant="contained">  <a className={linkClass}>تسجيل الدخول</a></Button> 

      </div>
     
    </nav>
  );
};

export default Navbar;

