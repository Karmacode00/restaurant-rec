"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { UserLocationContext } from '@/context/UserLocationContext'
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext'

export default function User() {

    const [userLocation,setUserLocation]=useState([]);
    const [selectedBusiness,setSelectedBusiness]=useState([]);
    
    useEffect(()=>{
      getUserLocation();
    },[])
    const getUserLocation=()=>{
      navigator.geolocation.getCurrentPosition(function(pos){
        console.log(pos)
        setUserLocation({
          lat:pos.coords.latitude,
          lng:pos.coords.longitude
        })
      })
    }

  return (
    <SelectedBusinessContext.Provider value={{selectedBusiness,setSelectedBusiness}}>
    <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
    <HeaderNavBar/>
       {children}
    </UserLocationContext.Provider>
    </SelectedBusinessContext.Provider>
  )
}
