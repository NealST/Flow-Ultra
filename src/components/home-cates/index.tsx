import { useEffect, useState } from 'react';
import { MdOutlineAdd } from "react-icons/md";
import getDirList from './controllers/get-dirs';
import styles from "./index.module.css";

const HomeCates = function () {

  const [disList, setDirList] = useState([]);

  useEffect(() => {
    getDirList().then(ret => {
      console.log('get dir list ret', ret);
    });
  }, []);

  return (
    <div className={styles.home_cates}>
      <div className={styles.cates_dirs}>
        <div className={styles.dirs_head}>
          <span className={styles.head_title}>Notes:</span>
          <MdOutlineAdd />
        </div>
        <div className={styles.dirs_list}></div>
      </div>
      <div className={styles.cates_tags}>
        <div className={styles.tags_head}>标签</div>
        <div className={styles.tags_list}></div>
      </div>
    </div>
  );
};

export default HomeCates;
