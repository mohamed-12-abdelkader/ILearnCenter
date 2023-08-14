// contexts/UserContext.js
import React, { createContext, useContext, useState,useEffect } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const [showSignupPage,setShowSignupPage]=useState(false)
    const [firstName,setFirstName]=useState("")
    const [secondName,setSecondName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      // استعادة البيانات المحفوظة من التخزين المحلي عند تحميل الصفحة
      const storedFirstName = localStorage.getItem('firstName');
      const storedSecondName = localStorage.getItem('secondName');
      const storedEmail = localStorage.getItem('email');
      const storedPhoneNumber = localStorage.getItem('phoneNumber');
  
      if (storedFirstName && storedSecondName && storedEmail && storedPhoneNumber) {
        setFirstName(storedFirstName);
        setSecondName(storedSecondName);
        setEmail(storedEmail);
        setPhoneNumber(storedPhoneNumber);
        setShowSignupPage(true);
        
      } else {
        setShowSignupPage(false);
        
      }
    }, []);

    const handleReset = () => {
      // إعادة تعيين الحقول وحذف البيانات من التخزين المحلي عند الضغط على زر إعادة التعيين
      setFirstName('');
      setSecondName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      
      setShowSignupPage(false)
      localStorage.removeItem('firstName');
      localStorage.removeItem('secondName');
      localStorage.removeItem('email');
      localStorage.removeItem('phone');
    };


    const handleClose = () => {
      setOpen(false);
    };

    const handleAppClick = () => {
      if (open) {
        handleClose();
      }
    };
  return (
    <UserContext.Provider value={{ showSignupPage,
    setShowSignupPage,
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
    setOpen,
    handleReset,
    handleClose,
    handleAppClick
     }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
