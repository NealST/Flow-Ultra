// 文件或文件夹列表展示与操作
import { useRef, ChangeEvent } from "react";
import { IList } from "./types";
import { MdOutlineFolder } from "react-icons/md";
import Input from "@/components/ui/input";
import styles from "./index.module.css";

const DirList = function (props: IList) {
  const { dataSource, onNewDirComplete, onRemove, onRename, onSelectDir } =
    props;
  const inputNameRef = useRef("");

  function onNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    inputNameRef.current = value;
  }

  function onSelect(type: string, name: string, index: number) {
    if (type === "input") {
      return;
    }
    onSelectDir(name, index);
  }

  return (
    <div className={styles.dirs_list}>
      {dataSource.map((item, index) => {
        const { type, path, name } = item;
        return (
          <div
            className={styles.list_item}
            key={index}
            onClick={() => onSelect(type, name, index)}
          >
            <MdOutlineFolder className={styles.item_icon} />
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
