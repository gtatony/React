import React from 'react'
import { AllProductsPage } from "./AllProductsPage";
import  ProuctsList  from "./ProuctsList";
import { products } from "./Products";


export  function Product() {
  return (
    
    <div className="App">
      <AllProductsPage />
    <>
    <table>
    <ProuctsList />
    {
      products.map(({id,productname,Quantity,price}) => {
        return(
          <>
          <tbody>
      <tr>
        <td>{id}</td>
        <td>{productname}</td>
        <td>{Quantity}</td>
        <td>{price}</td>
      </tr>
      </tbody>
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
