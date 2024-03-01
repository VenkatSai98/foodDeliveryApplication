import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import { userPersonalDetails } from "../utils/userPersonalDetails";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const [userIsDesktop, setUserIsDesktop] = useState(true);
  // useEffect(() => {
  //   window.innerWidth > 750 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  // }, [userIsDesktop]);
  let userStatus = userOnlineStatus();
  const { userName } = useContext(userPersonalDetails);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header-container lg:flex justify-between bg-slate-200">
      <div className="logo-img">
        <Link to="/">
          <img
            className="header-logo w-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVSOzymCG0atgITcXu9JfNGzbtWyloCzpxg&usqp=CAU"
            alt="img-logo"
          />
        </Link>
      </div>
      <div className="navbar">
        <ul className="flex p-4 m-4">
          <li className="px-2">OnLine Status: {userStatus ? "✔" : "🔴"}</li>
          <li className="px-2">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold text-lg">
            {" "}
            <Link to="/cart">Cart ({cartItems.length} - Items)</Link>
          </li>
          <button
            className="login-btn px-2"
            onClick={() => {
              loginText === "Login"
                ? setLoginText("Logout")
                : setLoginText("Login");
            }}
          >
            {loginText}
          </button>
          {/* <li className="font-semibold">{userName}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
