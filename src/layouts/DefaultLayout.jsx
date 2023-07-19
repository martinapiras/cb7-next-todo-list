import Navbar from "@/components/Navbar";
import styles from "./DefaultLayout.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={`${styles.DefaultLayout} col-12`}>
      <Navbar />
      <div className={`${styles.content} col-12`}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
