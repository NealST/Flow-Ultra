import { useEffect, useState } from 'react';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import getDirList from './controllers/get-dirs';
import styles from "./index.module.css";

const HomeCates = function () {

  const [dirList, setDirList] = useState([]);

  useEffect(() => {
    getDirList().then(ret => {
      console.log('get dir list ret', ret);
    });
  }, []);

  function addDir() {

  }

  return (
    <div className={styles.home_cates}>
      <div className={styles.cates_dirs}>
        <div className={styles.dirs_head}>
          <span className={styles.head_title}>Notes:</span>
          <MdOutlineCreateNewFolder onClick={addDir} />
        </div>
        <div className={styles.dirs_list}>
          {
            dirList.map(item => {
              return (
                <div className={styles.list_item} key={item}>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.cates_tags}>
        <div className={styles.tags_head}>标签</div>
        <div className={styles.tags_list}></div>
      </div>
    </div>
  );
};

export default HomeCates;
