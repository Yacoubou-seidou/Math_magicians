const Navbar = () => (
  <nav className="nav sizing">
    <h1>Math Magicians</h1>
    <ul className="nav_items">
      <li className="list_item">
        <a href="/">
          Home
        </a>
        <span className="hdivider">|</span>
      </li>
      <li className="list_item">
        <a href="/calculator">
          Calculator
        </a>
        <span className="hdivider">|</span>
      </li>
      <li className="list_item">
        <a href="/quote">
          Quote
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
