import "../assets/css/mainContent.css";
import Input from "./Input";
import { Cash, ClockFill, PersonFill } from "react-bootstrap-icons";

const MainContent = () => {
  // ambil data dari localhost
  const localId = localStorage.getItem("userId");

  const image = {
    image: "/image/rocket.png",
  };

  document.title = "Home Landing Page";

  const produkList = [
    {
      vpsList: {
        vps1: {
          vpsStarter: "vps starter",
          harga: "Rp. 20.000",
          data: {
            core: 1,
            ram: 1,
            storage: 20,
          },
        },
        vps2: {
          vpsMedium: "vps medium",
          harga: "Rp. 30.000",
          data: {
            core: 2,
            ram: 4,
            storage: 40,
          },
        },
        vps3: {
          vpsPro: "vps sultan",
          harga: "Rp. 40.000",
          data: {
            core: 4,
            ram: 6,
            storage: 60,
          },
        },
      },
    },
  ];

  return (
    <>
      <main>
        <div className="content">
          <p>Langkah langkah Pembelian Vps</p>

          <div className="contentBox">
            <div className="boxlangkahPembelian">
              <div className="stylingDesain">
                <div className="InnerStyling"></div>
              </div>
              <div className="DesainDown"></div>

              <p>1.</p>
              <div className="boxOutherLangkah">
                <div className="boxIcon">
                  <img
                    src={image.image}
                    alt="imageRocket"
                    className="imageRocket"
                  />
                </div>
                <p className="textRoadmapPembelian">Pilih Paket Vps</p>
              </div>
            </div>
            <div className="boxlangkahPembelian">
              <div className="stylingDesain">
                <div className="InnerStyling"></div>
              </div>
              <div className="DesainDown"></div>

              <div className="desainBox1">
                <div className="stylingDesain">
                  <div className="InnerStyling"></div>
                </div>
              </div>

              <p>2.</p>
              <div className="boxOutherLangkah">
                <div className="boxIcon">
                  <PersonFill className="person" />
                </div>
                <p className="textRoadmapPembelian">
                  Memasukan Informasi Penguna
                </p>
              </div>
            </div>
            <div className="boxlangkahPembelian">
              <div className="stylingDesain">
                <div className="InnerStyling"></div>
              </div>
              <div className="DesainDown"></div>

              <div className="desainBox1">
                <div className="stylingDesain">
                  <div className="InnerStyling"></div>
                </div>
              </div>

              <p>3.</p>
              <div className="boxOutherLangkah">
                <div className="boxIcon">
                  <Cash className="Cash" />
                </div>
                <p className="textRoadmapPembelian">Melakukan Pembayaran</p>
              </div>
            </div>
            <div className="boxlangkahPembelian">
              <div className="stylingDesain">
                <div className="InnerStyling"></div>
              </div>
              <div className="DesainDown"></div>

              <div className="desainBox1">
                <div className="stylingDesain">
                  <div className="InnerStyling"></div>
                </div>
              </div>

              <p>4.</p>
              <div className="boxOutherLangkah">
                <div className="boxIcon">
                  <ClockFill className="Clock" />
                </div>
                <p className="textRoadmapPembelian">Menunggu VPS anda siap.</p>
              </div>
            </div>

            {/* styling rounded */}

            <div className="desainBox1">
              <div className="stylingDesain">
                <div className="InnerStyling"></div>
              </div>
            </div>
          </div>
        </div>

        {/* produk kami */}

        <div className="boxProdukKami">
          <div className="produkKami">
            <h1>Produk Kami</h1>

            {/* produk card list */}

            {produkList.map((produk, index) => (
              <div key={index} className="boxProdukList">
                {Object.entries(produk.vpsList).map(([key, item]) => (
                  <div key={key} className="boxProduk">
                    <h2>{item.vpsStarter || item.vpsMedium || item.vpsPro}</h2>

                    <ul>
                      <li>Core: {item.data.core}</li>
                      <li>RAM: {item.data.ram} GB</li>
                      <li>Storage: {item.data.storage} GB</li>
                    </ul>

                    <button className="btnBuy">{item.harga}</button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* kontak kami */}

        <div className="containerBoxKontak">
          <div className="kontakBox">
            <div>
              <div className="boxKontakInner">
                <div>
                  <label htmlFor="Email">
                    <p className="textKontak">Email</p>
                  </label>
                  <Input
                    placeholder={"Email Anda"}
                    type={"email"}
                    className="inputEmail"
                  />
                </div>
                <div>
                  <label htmlFor="Username">
                    <p className="textKontak">Username</p>
                  </label>
                  <Input
                    placeholder={"Username Anda"}
                    type={"text"}
                    className="inputEmail"
                  />
                </div>
              </div>
              <div className="boxButtonSendOuther">
                <button className="BtnPesan">Kirim Pesan</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
