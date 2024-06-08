import React, { useState } from 'react'
import Apple from '../assets/apple.jpg'
import Iphone from '../assets/iphone.png'
import Jacket from '../assets/jacket.jpg'
import Orange from '../assets/orange.jpg'
import Phone from '../assets/phone.jpg'


import Card from '../components/Cards'
import Navbar from '../components/Navbar'

const data = [
    {
        id: 1,
        title: "Jacket",
        img: Jacket,
        price: "1200",
        category: "Cloth"
    },
    {
        id: 2,
        title: "Iphone",
        img: Iphone,
        price: "81200",
        category: "Phone"
    },
    {
        id: 3,
        title: "Iphone 10",
        img: Phone,
        price: "90000",
        category: "Phone"
    },
    {
        id: 4,
        title: "Apple",
        img: Apple,
        price: "180",
        category: "Fruit"
    },
    {
        id: 5,
        title: "Orange",
        img: Orange,
        price: "180",
        category: "Fruit"
    },
    {
        id: 6,
        title: "Orange",
        img: Orange,
        price: "180",
        category: "Electrics"
    },
]
export default function Product() {
    const[allData,setData]=useState(data);
    let uniqueCategory=[...new Set(data.map(item=>(item.category)))]
    // console.log(uniqueCategory);
  return (
    <div className='product'>
        <Navbar navItems={uniqueCategory} data={data} setData={setData}/>
       <Card data={allData} /> 
       {/* <h1>Hello From Product</h1> */}
    </div>
  )
}
