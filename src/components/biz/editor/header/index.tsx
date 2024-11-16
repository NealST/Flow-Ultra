import { SlSocialYoutube } from "react-icons/sl";
import { SlFrame } from "react-icons/sl";
import { RxExit } from "react-icons/rx";
import { IoTrashOutline } from "react-icons/io5";
import styles from './index.module.css';

type IProps = {
  title: string;
  saveTime: string;
  charCount: number;
}

const Header = function(props: IProps) {

  const { title, saveTime, charCount } = props;

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <span className={styles.header_title}>{title}</span>
        <span className={styles.header_save_tip}>{saveTime}</span>
        <span className={styles.header_count}>字数:{charCount}</span>
      </div>
      <div className={styles.header_right}>
        <div className={styles.action_item}>
          <SlSocialYoutube />
        </div>
        <div className={styles.action_item}>
          <SlFrame />
        </div>
        <div className={styles.action_item}>
          <RxExit />
        </div>
        <div className={styles.action_item}>
          <IoTrashOutline />
        </div>
      </div>
    </div>
  )
};

export default Header;
