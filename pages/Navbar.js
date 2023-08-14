import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import { useUserContext } from './context/ProjectContext';
const Navbar = () => {

  const {showSignupPage,
    firstName,
    secondName,
    open,
    setOpen,handleReset,
    handleClose } =useUserContext();
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


  function showCardClick(){
    setOpen(true)
  }

  const navClass = isScrolled ? 'bg-white shadow-md' : 'bg-blue-500';
  const linkClass = isScrolled ? 'text-black hover:underline' : 'text-white hover:underline';
 const logoClass= isScrolled?'text-blue-500':'text-white'

  return (
    <nav className={`  fixed top-0 left-0 right-0 p-4 flex justify-between items-center ${navClass} `} style={{zIndex:"1000"}}>
      
      <div className="flex items-center space-x-4">
        
        <img src='logo.jpg' className='h-[50px] ' />
       
        
        
      </div>
      {showSignupPage ?<div>
        <IconButton  onClick={showCardClick}  aria-label="delete" className={logoClass}  >
                      <AccountCircleIcon  style={{height:"40px",width:"40px"}}/>
                    </IconButton>
                    {open? (<div onClick={handleClose}  
                                     style={{position:"absolute",right:"6%",padding:"10px",marginRight:"10px",width:"250px",backgroundColor:"#f3f4f6",borderRadius:"20px"}}
 className='card'   >
     <div style={{display:"grid"}}>
      <span className='font' style={{margin:"10px",fontWeight:"bold",fontSize:"20px"}}>welcome:{firstName} {secondName} </span> 
      
      <span className='font profile' style={{fontWeight:"bold",margin:" 10px",fontSize:"20px"}}>
       
       <PersonIcon style={{color:"#1976d2"}}/>my profile </span>
      
      <span>
      <Link href="/"> <IconButton onClick={handleReset} aria-label="delete"  color="primary" >
             <InputOutlinedIcon style={{height:"40px",width:"40px"}}/>  <h3 className='font' style={{marginLeft:"5px"}}>log out</h3>   
       </IconButton></Link> 
      
       </span>
       
     </div>
     </div>):null}
      </div>:
      <div className="space-x-4 mr-10">
       
      <Button variant="contained" className='font '> <Link href="/SingUp" >  إنشاء حساب </Link> </Button> 
      <Button variant="contained">  <a className={linkClass}>تسجيل الدخول</a></Button> 
    </div>
      }
                   
                   
      
      
    </nav>

  );
};

export default Navbar;

