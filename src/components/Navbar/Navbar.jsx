import { useContext } from "react";
import { MainContext } from "@/store";
import Link from "next/link";
import { BiHomeHeart, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(MainContext);
  const onHandleLogout = () => {
    alert("See you soon!");
    dispatch({ type: "SET_LOGOUT" });
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.icon}>
        <Link href="/" title="Home">
          <BiHomeHeart />
        </Link>
      </div>
      <div className={styles.text}>
        {state.username ? `Good to see you, ${state.username}!` : "Visitor"}
      </div>
      <div className={styles.icon}>
        <Link
          href="/login"
          onClick={state.username && onHandleLogout}
          title={state.username ? "Log out" : "Log in"}
        >
          {state.username ? <BiLogOutCircle /> : <BiLogInCircle />}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
