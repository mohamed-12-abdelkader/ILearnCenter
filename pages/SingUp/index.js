import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Button from '@mui/material/Button';
import { Footer } from '../Footer';
import { useState,useEffect} from 'react';
import {JackInTheBox} from "react-awesome-reveal";
import { useUserContext } from '../context/ProjectContext';

import Link from 'next/link';
 const SaingUp = () => {
    const {setShowSignupPage,
        firstName,
        setFirstName,
        secondName,
        setSecondName,
        email,
        setEmail,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        open,
        setOpen, } = useUserContext();

        const [selectedGrade, setSelectedGrade] = useState('');
        
          
    const [isFormValid, setIsFormValid] = useState(false);
    const [age, setAge] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    }; 
    const handleSignup = () => {
     
      // قم بإتمام عملية إنشاء الحساب هنا
      localStorage.setItem('firstName', firstName);
  localStorage.setItem('secondName', secondName);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNumber', phoneNumber);
 
 
  
  setShowSignupPage(true)
    };
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    
    <>
    <Dialog
       
       open={open}
       onClose={handleClose}
       aria-labelledby="responsive-dialog-title"
     >
       <DialogTitle id="responsive-dialog-title">
       
       </DialogTitle>
       <DialogContent style={{textAlign:"center"}}>
         <JackInTheBox>
       <CheckCircleOutlineIcon style={{fontSize:"40px" ,color:"green",height:"50px",width:"50px"}}/>
       </JackInTheBox>
         <DialogContentText>
         
           <h2 className='font h2' style={{ direction:"rtl"}}>
          تم انشاء الحساب بنجاح 
           </h2>
           <h6 className='font'>
           اضغط على علامة الصح فى الاسفل للإستمرار
           </h6>
         </DialogContentText>
       </DialogContent>
       <DialogActions>
        
       <IconButton aria-label="delete" onClick={handleSignup}  color="primary">
      <Link href="/Classrooms"> <DoneAllOutlinedIcon style={{fontSize:"40px" ,color:"green"}}/> </Link>    
</IconButton>
       </DialogActions>
     </Dialog>




   <div className='content h-[850px]  mt-[80px]'>
   <div className=' h-[200px] flex justify-center items-center  '>
    <h1 className='text-white text-8xl tracking-wider'>ILearn Center</h1>
    </div>
  <div className='container flex justify-center ' >
   
    
  <div className=' grid text-center w-[500px] mt-[60px] mb-0 bg-#ffffff14 '  >
          <h1 className='font text-white mt-5'>انشاء حساب جديد </h1>  

          <TextField className='input'  id="standard-basic" label="first name" variant="standard"   value={firstName} 
           onChange={e=>setFirstName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="second name" variant="standard"  value={secondName}
           onChange={e=>setSecondName(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="email" variant="standard"        value={email}     
           onChange={e=>setEmail(e.target.value)} />
           <TextField className='input'  id="standard-basic" type='password' label="password" variant="standard"     value={password}  
           onChange={e=>setPassword(e.target.value)} />
           <TextField className='input'  id="standard-basic" label="phone number" variant="standard" value={phoneNumber}
            onChange={e=>setPhoneNumber(e.target.value)} />


          
         <div>
         <Button variant="outlined" className='font mt-5 w-[100px] text-white mb-5' onClick={handleClickOpen} >sign up </Button>
         </div>
         
       </div>        

 </div>

 </div>
     <Footer />
    </>
  )
}

export default SaingUp