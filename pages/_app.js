import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import { useState } from 'react';
import UserProvider from './context/ProjectContext';
export default function App({ Component, pageProps }) {
  const [name,setname]=useState("mohamed")
  function click(){
    console.log(name)
  }
  return (
    <div>
      <UserProvider>
        <Navbar/>
      <Component {...pageProps} />
    </UserProvider>
    </div>
  );
}
