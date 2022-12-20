import React from 'react'
import { useState} from 'react';
import axios from "axios";


export default function Product() {

    const [datas, setDatas] = useState([])



  // const adddata =() =>{
  //   fetch("http://localhost:3001/posts")
  //   .then((data) => data.json())
  //   .then((data) => setDatas(data))

  // }
  // useEffect(adddata, [])
  const getCustomersData = () => {
    axios
    .get("http://localhost:3001/posts")
    .then(data => setDatas(data.data))
    .catch(error => setDatas(error));
    };
   getCustomersData();
  
    return (
      <div className="App">
        <h1>Products List</h1>
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