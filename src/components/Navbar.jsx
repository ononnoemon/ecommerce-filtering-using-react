import React, { useState } from 'react'

export default function Navbar({navItems,data,setData}) {
    const[activeName,setActiveName]=useState('')
    const handleOnClick=(name)=>{
        setActiveName(name)
        const filterData=data.filter(item=>item.category===name)
        if(filterData.length){
            setData(filterData)
        }
        else{
             setData(data)
        }


      
    }
  return (
    <div className='navbar'>
        <ul className='nav'>
            <li style={{backgroundColor:activeName==''?'rgb(28, 164, 155)':''}} onClick={()=>handleOnClick('')}>All</li>
            {
                navItems.map((name,index)=>(
                    <li key={index} style={{backgroundColor:name==activeName?'rgb(28, 164, 155)':''}} onClick={()=>handleOnClick(name)}>{name}</li>
                ))
            }
        </ul>
    </div>
  )
}
