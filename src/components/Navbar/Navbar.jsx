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
        <Link href="/">
          <BiHomeHeart />
        </Link>
      </div>
      <div className={styles.icon}>
        <Link href="/login">
          {state.username ? (
            <BiLogOutCircle onClick={onHandleLogout} />
          ) : (
            <BiLogInCircle />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
