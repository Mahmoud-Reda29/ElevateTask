import React, { useEffect } from 'react'
import styles from './Home.module.css'
import Products from '../Products/Products';
function Home() {
     useEffect(()=>{
          console.log('Home Mounting');

     },[])
  return (
    <Products />
  )
}

export default Home
