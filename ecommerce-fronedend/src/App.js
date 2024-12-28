import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  var [products, setProducts] = useState([
    
      {
        id: 1,
        name: "Wireless Mouse",
        description: "A comfortable and ergonomic wireless mouse",
        price: 2999,
        inInventory: 2
      },
      {
        id: 2,
        name: "Bluetooth Headphones",
        description: "High-quality sound with noise cancellation",
        price: 7999,
        inStock: true
      },
      {
        id: 3,
        name: "Laptop Stand",
        description: "Adjustable stand for laptops to improve posture",
        price: 4999,
        inStock: false
      }
    
  ])

  return (
    <>
    <div className='topNavigation'>
      <h1 className='title'>Top Navigation</h1>
    </div>

   
   <div className='productcontainer'>
    {products.map((product)=>(
      <>
      <div className='container'>
      <h1>{product.name}</h1>
    
      <h1>{product.price}Rs</h1>
      
      <div className='description'>
      <h1>{product.description}</h1>
      <br/>
      <div className='Orderbtn'>
        <button>Order NoW</button>
      </div>
      </div>
      </div>
      </>
    ))

    }
    </div>
  
    </>
  )
}

export default App
