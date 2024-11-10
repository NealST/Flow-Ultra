import { useEffect, useState } from 'react';
import { VscAdd } from "react-icons/vsc";
import getDirList from './controllers/get-dirs';
import createDir from './controllers/create-dir';
import DirList from '../dir-list';
import useSelectedDirStore, { IState } from './controllers/use-dir-store';
import { IDirItem } from '../dir-list/types';
import styles from "./index.module.css";

const HomeCates = function () {

  const [dirList, setDirList] = useState([] as IDirItem[]);
  const setSelectedDir = useSelectedDirStore((state: IState) => state.setName);

  useEffect(() => {
    getDirList().then(ret => {
      console.log('get dir list ret', ret);
      if (ret.length === 0) {
        return
      }
      setDirList(ret.map(item => ({
        name: item.name,
        type: 'dir'
      })));
      // select the first dir by default
      setSelectedDir(ret[0].name);
    });
  }, []);

  function addDir() {
    const newDirList = [{
      type: 'input',
      name: '',
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
    createDir(newName).then(() => {
      // create dir successfully
      newDirList[0] = {
        type: 'dir',
        name: newName,
      };
      setDirList(newDirList);
    }).catch(() => {
      // create dir with exception
      newDirList.shift();
      setDirList(newDirList);
    });
  }

  function onRemoveDir() {}

  function onRenameDir() {}

  return (
    <div className={styles.home_cates}>
      <div className={styles.cates_dirs}>
        <div className={styles.dirs_head}>
          <span className={styles.head_title}>Notes:</span>
          <VscAdd onClick={addDir} />
        </div>
        <DirList
          dataSource={dirList}
          onNewDirComplete={onNewDirComplete}
          onRemove={onRemoveDir}
          onRename={onRenameDir}
          onSelectDir={(newName: string, index: number) => setSelectedDir(newName)}
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
