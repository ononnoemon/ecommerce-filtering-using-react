import React from 'react'
import Apple from '../assets/apple.jpg'
import Iphone from '../assets/iphone.png'
import Jacket from '../assets/jacket.jpg'
import Orange from '../assets/orange.jpg'
import Phone from '../assets/phone.jpg'
export default function Cards({data}) {
    // console.log(data);
  return (
    <div className='cards'>
       
            {data.map(item =>(
                <div key={item.id} className="card">
                    <img src={item.img} alt="" />
                    <h1>{item.title}</h1>
                    <h3>Price: {item.price} TK</h3>
                 </div>
            ))
        }
            
       
    </div>
  )
}
