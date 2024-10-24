import React, { useEffect } from 'react'
import styles from './RecentProducts.module.css'
function RecentProducts() {
     useEffect(()=>{
          console.log('RecentProducts Mounting');

     },[])
  return (
    <div>RecentProducts</div>
  )
}

export default RecentProducts
