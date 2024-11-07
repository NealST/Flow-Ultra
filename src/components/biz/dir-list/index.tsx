// 文件或文件夹列表展示与操作
import { useRef, ChangeEvent } from "react";
import { IList } from "./types";
import { MdOutlineFolder } from "react-icons/md";
import Input from "@/components/ui/input";
import styles from "./index.module.css";

const DirList = function (props: IList) {
  const { dataSource, onNewDirComplete, onRemove, onRename } = props;
  const inputNameRef = useRef("");

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    inputNameRef.current = value;
  }

  return (
    <div className={styles.dirs_list}>
      {dataSource.map((item, index) => {
        const { type, path, name } = item;
        return (
          <div className={styles.list_item} key={index}>
            <MdOutlineFolder />
            {type === "input" ? (
              <Input
                className={styles.item_input}
                autoFocus
                onChange={onNameChange}
                onBlur={() => onNewDirComplete(inputNameRef.current)}
              />
            ) : (
              <span className={styles.item_name}>{name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DirList;
