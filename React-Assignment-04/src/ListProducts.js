import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";

export function ListProducts() {
 

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/posts");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  // const handleclick =(e) =>{
  //   e.preventDefault();
  //   if(window.confirm('Are yor sure you want to view the details ?')){
  //     navigate(`/products/${id}`)
  //   }
  // }

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        {data.map(({ id, product, quantity, price }) => {
          return (

            <>
              <tbody >
                <tr >
                  <td >
                    <Link  to={`/products/${id}`} >{product}</Link>
                  </td>
                  <td>{quantity}</td>
                  <td>Rs {price}</td>
                </tr>
              </tbody>
              </>

              );
        })}
      </table>

      <div className="space">
        <Link to="/addproduct">Add Product</Link>
      </div>
    </div>
  );
}
