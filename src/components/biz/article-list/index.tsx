import { useRef, ChangeEvent } from "react";
import { GoFile } from "react-icons/go";
import Input from "@/components/ui/input";
import { IArticleList } from "./types";
import cn from "classnames";
import styles from "./index.module.css";

const ArticleList = function (props: IArticleList) {
  const {
    dataSource,
    selectedArticle,
    onNewArticleComplete,
    onRemove,
    onRename,
    onSelectArticle,
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
    onSelectArticle(name, index);
  }

  return (
    <div className={styles.article_list}>
      {dataSource.map((item, index) => {
        const { type, name } = item;
        const isSelected = name === selectedArticle;
        return (
          <div
            className={cn(
              styles.list_item,
              isSelected ? styles.list_item_selected : ""
            )}
            key={name}
            onClick={() => onSelect(type, name, index)}
          >
            <GoFile className={styles.item_icon} />
            {type === "input" ? (
              <Input
                className={styles.item_input}
                autoFocus
                onChange={onNameChange}
                onBlur={() => onNewArticleComplete(inputNameRef.current)}
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

export default ArticleList;
