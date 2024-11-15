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
        <span className={styles.header_count}>{charCount}</span>
      </div>
      <div className={styles.header_right}>
        <div className={styles.action_show}>
          <SlSocialYoutube />
          <span className={styles.action_text}>演示模式</span>
        </div>
        <div className={styles.action_dropin}>
          <SlFrame />
          <span className={styles.action_text}>沉浸模式</span>
        </div>
        <div className={styles.action_dropin}>
          <RxExit />
          <span className={styles.action_text}>导出</span>
        </div>
        <div className={styles.action_dropin}>
          <IoTrashOutline />
          <span className={styles.action_text}>删除</span>
        </div>
      </div>
    </div>
  )
};

export default Header;
