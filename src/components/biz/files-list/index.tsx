// 文件或文件夹列表展示与操作
import { IList } from './types';
import styles from './index.module.css';


const FilesList = function(props: IList) {
 
  const { dataSource, onNewInputComplete, onRemove, onRename } = props;

  return (
    <div className={styles.files_list}>
      {
        dataSource.map(item => {
          return (
            <div className={styles.list_item}>
            </div>
          )
        })
      }
    </div>
  )
}

export default FilesList;
