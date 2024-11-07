import { useEffect, useState, useRef } from 'react';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import getDirList from './controllers/get-dirs';
import createDir from './controllers/create-dir';
import DirList from '../dir-list';
import { IDirItem } from '../dir-list/types';
import styles from "./index.module.css";

const HomeCates = function () {

  const [dirList, setDirList] = useState([] as IDirItem[]);
  const newDirNameRef = useRef('');

  useEffect(() => {
    getDirList().then(ret => {
      console.log('get dir list ret', ret);
    });
  }, []);

  function addDir() {
    const newDirList = [{
      type: 'input'
    }].concat(dirList);
    setDirList(newDirList);
  }

  function onNewDirComplete(newName: string) {
    const newDirList = ([] as IDirItem[]).concat(dirList);
    if (!newName) {
      newDirList.shift();
      setDirList(newDirList);
      return
    }
    createDir(newName);
  }

  function onRemoveDir() {}

  function onRenameDir() {}

  return (
    <div className={styles.home_cates}>
      <div className={styles.cates_dirs}>
        <div className={styles.dirs_head}>
          <span className={styles.head_title}>Notes:</span>
          <MdOutlineCreateNewFolder onClick={addDir} />
        </div>
        <DirList
          dataSource={dirList}
          onNewDirComplete={onNewDirComplete}
          onRemove={onRemoveDir}
          onRename={onRenameDir}
        />
      </div>
      <div className={styles.cates_tags}>
        <div className={styles.tags_head}>标签</div>
        <div className={styles.tags_list}></div>
      </div>
    </div>
  );
};

export default HomeCates;
