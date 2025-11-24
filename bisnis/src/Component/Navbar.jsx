import NavbarLink from "./NavbarLink";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div>
          <h1 className="judul">CloudFriends</h1>
        </div>
        <div className="navLink">
          <NavbarLink Navigation={"/"} Link={"Home"}></NavbarLink>
          <NavbarLink Navigation={"/"} Link={"Tentang Kami"}></NavbarLink>
          <NavbarLink Navigation={"/"} Link={"Produk Kami"}></NavbarLink>
          <NavbarLink Navigation={"/"} Link={"Kontak Kami"}></NavbarLink>
          <NavbarLink Navigation={"/"} Link={"Alamat Kami"}></NavbarLink>
        </div>
        <div className="boxAuth">
          <div className="login">
            <a href="/login">Sign In</a>
          </div>
          <div className="register">
            <a href="/register">Sign Up</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
