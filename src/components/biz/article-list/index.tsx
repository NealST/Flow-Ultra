import { useRef, ChangeEvent } from 'react';
import { GoFile } from "react-icons/go";
import Input from '@/components/ui/input';
import { IArticleList } from './types';
import styles from './index.module.css';

const ArticleList = function(props: IArticleList) {

  const { dataSource, onNewArticleComplete, onRemove, onRename, onSelectArticle } = props;
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
        return (
          <div
            className={styles.list_item}
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
}

export default ArticleList;
