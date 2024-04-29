import React, { useEffect, useState } from "react";
// react router
import { useLocation, useNavigate } from "react-router-dom";
// import files
// import { BASE_URL } from "../Constants/ApiConstant";
import { AuthErrorModal } from "../Components/Modal";
import { useAuth } from "../Context/AuthContext";
// react icon
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import css
import styles from "./ScreensStyle/Login.module.css";
import { loginRequest, LoginResponse } from "../Services/ApiClient";
import { GlobalLoader } from "../Components/Loader";

const eye = <AiFillEye />;
const eyeInvisible = <AiFillEyeInvisible />;

const Login: React.FC = () => {
  const { login, session } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // define state
  const [autherror, setAutherror] = useState<string>("");
  const [showerror, setShowerror] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<React.ReactNode>(eyeInvisible);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [showIconUsername, setShowIconUsername] = useState<boolean>(false);
  const [showfullusernameiconsection, setShowfullusernameiconsection] =
    useState<boolean>(false);

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget); // Get form data
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const role = formData.get("role") as string;

  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify({ email, password, role }); // Construct request body

  //   const requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   try {
  //     setLoader(true);

  //     const response = await fetch(
  //       `${BASE_URL}/dashboard/login`,
  //       requestOptions
  //     );
  //     const result = await response.json();
  //     console.log(result);

  //     if (response.ok) {
  //       const { user_id, name, token } = result.data;
  //       login({
  //         token: token,
  //         user: {
  //           id: user_id,
  //           email: email,
  //           name: name,
  //         },
  //       });
  //     } else {
  //       // setAutherror(result.message);
  //       setAutherror("We Are Sorry! User Not Found");
  //       setShowerror(true);
  //       console.error("Login failed");
  //     }
  //   } catch (error) {
  //     console.error(error); // Handle errors
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     
    try {
      setLoader(true);
      const response: LoginResponse = await loginRequest(
        userNameValue,
        password,
        "admin",
      );
      const { user_id, name, token,role:roleData} = response.data;

      login({
        token: token,
        user: {
          id: user_id,
          email: userNameValue,
          name: name, 
          role: roleData
        },
      });
      // navigate("/", { replace: true });
    } catch (error) {
      setAutherror("We Are Sorry! User Not Found");
      setShowerror(true);
      console.error("Login failed");
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    if (session) navigate(from, { replace: true });
  }, [session]);

  const closeModal = () => {
    setShowerror(false);
    setAutherror("");
    setPassword("");
    setUserNameValue("");
    setShowIcon(false);
    setShowIconUsername(false);
    setShowfullusernameiconsection(false);
  };

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setIcon(type === "password" ? eye : eyeInvisible);
  };
  // password icon
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setShowIcon(value !== "");
  };
  // username icon
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setShowfullusernameiconsection(value !== "");
    const checkvalidate = value.endsWith("@jcblaccessories.com");
    setShowIconUsername(checkvalidate && value !== "");
    setUserNameValue(value);
   
  };

  return (
    <div className={` ${styles.container}`}>
      {loader ? (
        <GlobalLoader />
      ) : (
        <div className={styles.main}>
          {/* logo section */}
          <div className={styles.main_logo}>
            <img
              src={require("../Assets/Glono.png")}
              alt="Glono..."
              className={styles.logo}
            />
            <img
              src={require("../Assets/Jcbl.png")}
              alt="Glono..."
              className={styles.jcbl_logo}
            />
          </div>
          {/* three circle  */}
          <div className={styles.big_circle_left}></div>
          <div className={styles.big_circle_right}></div>
          <div className={styles.small_circlesmall}></div>
          {/* header text section */}
          <h1 className={styles.login_text}>Login In</h1>
          <div className={styles.Welcome_text}>Welcome to Glono Dashboard</div>
          {/* form section start */}
          <form onSubmit={handleFormSubmit} className={styles.login_form}>
            {/* <form onSubmit={handleSubmit} className={styles.login_form}> */}
            <div className={styles.input_label_main}>
              <label className={styles.label} htmlFor="username">
                User Name
              </label>
              <div className={styles.parent_password_icon}>
                <input
                  className={styles.input}
                  id="email"
                  type="text"
                  name="email"
                  placeholder="karan_sharma@jcblaccessories.com"
                  value={userNameValue}
                  // onChange={(e) => setUserNameValue(e.target.value)}
                  onChange={handleUsernameChange}
                  required
                />
                {showfullusernameiconsection && (
                     showIconUsername ? (
                      <span className={styles.user_icon}>
                        <img
                          src={require("../Assets/rightSign.png")}
                          alt="right..."
                        />
                      </span>
                    ) : (
                      <span className={styles.user_icon}>
                        <img
                          src={require("../Assets/cross.png")}
                          alt="right..."
                        />
                      </span>
                    )
                )}
             
              </div>
            </div>
            <div className={styles.input_label_main}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <div className={styles.parent_password_icon}>
                <input
                  className={styles.input}
                  id="password"
                  type={type}
                  name="password"
                  placeholder="***************"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
                {showIcon && (
                  <span className={styles.password_Icon} onClick={handleToggle}>
                    {icon}
                  </span>
                )}
              </div>
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
          {showerror && (
            <AuthErrorModal error={autherror} onClose={closeModal} />
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
