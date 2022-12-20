import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/posts/${id}`);
      const datas = await response.json();
      setDatas(datas);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      <h3>Product Name: {datas.product}</h3>
      <Link to="/products">Back</Link>
    </div>
  );
}
