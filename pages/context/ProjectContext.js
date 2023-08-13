// contexts/UserContext.js
import React, { createContext, useContext, useState } from 'react';

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
     }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
