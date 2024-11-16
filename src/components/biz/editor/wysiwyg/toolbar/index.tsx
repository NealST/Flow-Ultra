import { CiCirclePlus } from "react-icons/ci";
import styles from "./index.module.css";

const ToolBar = function () {
  return (
    <div className={styles.toolbar}>
      <div className={styles.tools_insert}>
        <CiCirclePlus className={styles.insert_icon} />
      </div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_action}></div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_text}></div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_color}></div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_space}></div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_inserts}></div>
      <div className={styles.tools_divider}></div>
      <div className={styles.tools_others}></div>
    </div>
  );
};

export default ToolBar;
