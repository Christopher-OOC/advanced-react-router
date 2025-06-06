import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h1>Home Page</h1>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/product/new">
          <li>Create Product</li>
        </NavLink>
        <NavLink to="/order">
          <li>Order</li>
        </NavLink>
        <NavLink to="/cart">
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
