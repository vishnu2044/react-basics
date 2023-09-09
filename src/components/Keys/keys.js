import React, {useState} from 'react'
import {Button, Accordion} from 'react-bootstrap';

const products = [
    {id:1, name: "Laptop", brand: "MSI", quantity: 3},
    {id:2, name: "Laptop", brand: "DELL", quantity: 5},
    {id:3, name: "Laptop", brand: "Lenovo", quantity: 10},
    {id:4, name: "Laptop", brand: "HP", quantity: 15},
]

const Keys = () => {
    const [items, setItem] = useState(products);

    const changQuantity = (id)=>{
        const newItem = items.map((item)=>
        item.id === id ? {...item,quantity:item.quantity + 1}:item
        );
        setItem(newItem)
    }
  return (
    <div className='d-flex '>
        {items.map((product)=>(
            <div className=' col-lg-2  bg-success text-white m-2 ' key={product.id} >
                <h4>Item: {product.name} </h4>
                <h4>Brand : {product.brand}</h4>
                <h5>quantity {product.quantity}</h5>
                <Button onClick={()=>changQuantity(product.id)} variant="warning" type='button'>+</Button>{""}
            </div>

        ))}

    </div>
    
  )
}

export default Keys