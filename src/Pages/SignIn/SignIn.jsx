import React from "react";
import { Link as LinkR, useNavigate } from "react-router-dom";
import Video from "../../assets/video.mp4";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { authState } from "../../store/auth";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const onSubmit = () => {
    setAuth({ ...auth, user: watch(), isAuth: true });
    navigate("/");
  };

  return (
    <div>
      <div className="IdentifiyContainer">
        <div className="IdentifiyBg">
          <video
            className="VideoBg"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
        <div className="IdentifiyContent">
          <div className="containerLogin">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="title">Login</div>
              <div className="input-box underline">
                <input
                  type="email"
                  placeholder="Enter votre email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
                />
                {errors.email && <span>entrer un valide email</span>}

                <div className="underline" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Enter votre mot de passe"
                  required
                  name="password"
                  {...register("password", { required: true, min: 8 })}
                />
                {errors.password && <span>Entrer votre mot de passe</span>}

                <div className="underline" />
              </div>
              <div className="input-box button">
                <input
                  type="submit"
                  name
                  defaultValue="Continue"
                  // onClick={handleLogin}
                />
              </div>
            </form>
            <div className="option">
              <span>Vous n'ete pas inscrit? </span>
              <LinkR to="/register" className="toregister">
                {" "}
                S'inscrire
              </LinkR>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
