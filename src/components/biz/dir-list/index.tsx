// 文件或文件夹列表展示与操作
import { useRef, ChangeEvent } from "react";
import { IList } from "./types";
import { GoFileDirectory } from "react-icons/go";
import Input from "@/components/ui/input";
import cn from "classnames";
import styles from "./index.module.css";

const DirList = function (props: IList) {
  const {
    dataSource,
    selectedDir,
    onNewDirComplete,
    onRemove,
    onRename,
    onSelectDir,
  } = props;
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
        const { type, name } = item;
        const isSelected = name === selectedDir;
        return (
          <div
            className={cn(
              styles.list_item,
              isSelected ? styles.list_item_selected : ""
            )}
            key={name}
            onClick={() => onSelect(type, name, index)}
          >
            <GoFileDirectory className={styles.item_icon} />
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
