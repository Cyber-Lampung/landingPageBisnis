import { useState } from "react";
import "../../../../assets/css/Login.css";
import Input from "../../../Input";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const Login = () => {
  const image = {
    image: "/image/ptero.png",
  };

  return (
    <>
      <form method="POST">
        <div className="boxtext">
          <div className="innerBoxAsideLeft">
            <div className="image">
              <img src={image.image} alt="" />
            </div>
            <h1>Hello Selemat Datang</h1>
          </div>
        </div>
        <div className="boxLogin">
          <div className="innerbox">
            <div className="judulBoxLogin">
              <h1>Masuk ke Akun Sekarang</h1>
            </div>
            <div className="inputUser">
              <Input
                type={"email"}
                placeholder={"Email Anda"}
                className={"input"}
              />
              <div>
                <Input
                  type={"password"}
                  placeholder={"Password Anda"}
                  className={"input"}
                />
                <div>
                  <Eye className="eye" />
                  <EyeSlash className="eyeSlash" />
                </div>
              </div>
            </div>
          </div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
