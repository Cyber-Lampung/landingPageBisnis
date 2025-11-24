import "../assets/css/navbar.css";

const NavbarLink = ({ Navigation, Link }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={Navigation}>{Link}</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarLink;
