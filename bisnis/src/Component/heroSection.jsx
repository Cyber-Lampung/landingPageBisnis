import "../assets/css/heroSection.css";
import * as Ic from "react-bootstrap-icons";

const HeroSection = () => {
  const image = {
    image: "/asset/image/rocket.png",
  };

  return (
    <>
      <section>
        <div className="containerBox">
          <div className="textRight">
            <h1 className="judulSection">
              Tempat server andalan dan terpercaya oleh jutaan orang
            </h1>
            <p>
              konsultasikan apa keperluan anda dan kami akan siapkan dalam
              berapa menit. <br /> always create vps in cloudfriends so happy.
            </p>

            <div className="mail">
              <div>
                <div className="boxMailInput">
                  <Ic.Envelope className="iconMail" />
                  <div className="customGaris">
                    <div className="garisUp"></div>
                  </div>
                </div>
                <input
                  type="text"
                  name=""
                  id="inputMail"
                  placeholder="Email anda"
                />
              </div>
              <div>
                <button type="submit" id="kirim">
                  kirim
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* https://user-images.githubusercontent.com/62524855/183531740-c36d6df2-6245-4dad-bd9d-0abc892cf9a1.gif */}
            <img
              src="https://user-images.githubusercontent.com/62524855/183531740-c36d6df2-6245-4dad-bd9d-0abc892cf9a1.gif"
              alt=""
              className="imageGif"
            />
          </div>
        </div>

        <div className="downArrow">
          <p>Geser Kebawah</p>
          <img src="/image/rocket.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
