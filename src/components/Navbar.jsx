import React from 'react'

export default function Navbar({navItems,data,setData}) {
    const handleOnClick=(name)=>{
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
            <li onClick={()=>handleOnClick('')}>All</li>
            {
                navItems.map((name,index)=>(
                    <li key={index} onClick={()=>handleOnClick(name)}>{name}</li>
                ))
            }
        </ul>
    </div>
  )
}
