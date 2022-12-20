import React from 'react'
import { useState,useEffect} from 'react';


export default function Product() {

    const [datas, setDatas] = useState([])



  const adddata =() =>{
    fetch("http://localhost:3001/posts")
    .then((data) => data.json())
    .then((data) => setDatas(data))

  }
  useEffect(adddata, [])
  
  
    return (
      <div className="App">
        <h1>Products List(using Functional Components)</h1>
        <>
        <table>
        <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        {
          datas.map(({id,productname,quantity,price}) => {
            return(
              <>
          <tr>
            <td>{id}</td>
            <td>{productname}</td>
            <td>{quantity}</td>
            <td>{price}</td>
          </tr>
              </>
            )
          }
          )
          
        }
        </table>
        </>
      </div>
  )
}
