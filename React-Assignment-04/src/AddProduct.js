import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const formValidationSchema = yup.object({
  product: yup.string().required("Product Name is required"),
  quantity: yup.string().required("Quantity is required"),
  price: yup.string().required("Price is required"),
});
export function AddProduct() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      product: "",
      quantity: "",
      price: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newProduct) => {
      addProduct(newProduct);
    },
  });

  const addProduct = (newProduct) => {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/products"));
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form className="style" onSubmit={formik.handleSubmit}>
        <input
          id="product"
          name="product"
          type="text"
          value={formik.values.product}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Product Name"
        />
        {formik.touched.product && formik.errors.product ? (
          <p className="error-style">{formik.errors.product}</p>
        ) : (
          ""
        )}

        <input
          id="quantity"
          name="quantity"
          type="text"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Quantity"
        />
        {formik.touched.quantity && formik.errors.quantity ? (
          <p className="error-style">{formik.errors.quantity}</p>
        ) : (
          ""
        )}

        <input
          id="price"
          name="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Price"
        />
        {formik.touched.price && formik.errors.price ? (
          <p className="error-style">{formik.errors.price}</p>
        ) : (
          ""
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
