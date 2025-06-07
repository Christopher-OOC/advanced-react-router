import { Form } from "react-router-dom";
import Nav from "../../components/Nav";

function CreateProduct() {
  return (
    <div>
      <div>
        <h1>Please fill all the information to create a new product!</h1>
      </div>
      <div>
        <Form method="POST" encType="multipart/form-data">
          <div>
            <label>Name: </label>
            <input type="text" />
          </div>
          <div>
            <label>Description: </label>
            <input type="text" />
          </div>
          <div>
            <label>Price: </label>
            <input type="number" />
          </div>
          <div>
            <label>Available Quantity: </label>
            <input type="number" />
          </div>
          <div>
            <label>File: </label>
            <input type="file" />
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateProduct;
