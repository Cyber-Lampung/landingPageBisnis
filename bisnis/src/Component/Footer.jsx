import "../assets/css/mainContent.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="boxFooter">
          <hr className="garisHorizontal" />
          <div className="innerBoxFooter">
            <h3 className="textFooterJudul">CloudFriends</h3>
          </div>
          <div className="listNav">
            <div className="navbarBottom">
              <ul>
                <li>
                  <a href="#Home">Home</a>
                  <a href="#RoadmapPembelian">Roadmap Pembelian</a>
                  <a href="#ProdukKami">Produk Kami</a>
                  <a href="#KontakKami">Kontak Kami</a>
                </li>
              </ul>
            </div>
            <div className="AlamatKami">
              <div className="outherBoxKontak">
                <div className="innerBoxKontak">
                  <h2>Alamat kami</h2>
                  <p>Lampung, Bandar Lampung, Natar, 35362</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
