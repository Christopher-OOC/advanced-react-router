import { Form, redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import { useState } from "react";
import { addProduct } from "../../services/apiProducts";

function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [availableQuantity, setAvailableQuantity] = useState(1);

  const newProduct = {
    name,
    description,
    price,
    availableQuantity,
  };

  return (
    <div>
      <div>
        <h1>Please fill all the information to create a new product!</h1>
      </div>
      <div>
        <Form method="POST" encType="multipart/form-data">
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description: </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Price: </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Available Quantity: </label>
            <input
              type="number"
              value={availableQuantity}
              onChange={(e) => setAvailableQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <label>File: </label>
            <input type="file" name="file" />
          </div>
          <div>
            <input
              type="hidden"
              name="data"
              value={JSON.stringify(newProduct)}
            />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const obj = Object.fromEntries(formData);

  const error = {};

  if (obj.address === "") {
    error.address = "No address";
  }

  if (Object.keys(error).length > 0) {
    return error;
  }

  const data = await addProduct(formData);

  return redirect("/products");
}

export default CreateProduct;
