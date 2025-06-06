import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <h1>Home Page</h1>
      <ul>
        <NavLink>
          <li>Products</li>
        </NavLink>
        <NavLink>
          <li>Create Product</li>
        </NavLink>
        <NavLink>
          <li>Order</li>
        </NavLink>
        <NavLink>
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
