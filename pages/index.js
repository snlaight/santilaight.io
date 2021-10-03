import {useEffect } from "react";
 
import Image from 'next/image' ; 
import styles from '../styles/Home.module.css' ; 
import {useRouter} from "next/router" ;
import HomePage from './landingPage';
export default function Home() {
  const router = useRouter() ;
  useEffect(()=>{
    router.push('/landingPage')  
})
  return (
      <div className="bg-gray-900">
         <HomePage /> 
      </div>
  );
}
