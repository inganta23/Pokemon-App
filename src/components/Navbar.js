import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="navlink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navlink" to="Pokemon">
            Pokemon
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
