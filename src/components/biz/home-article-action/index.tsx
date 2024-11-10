// article panel action
import { useRef, ChangeEvent } from 'react';
import Input from '@/components/ui/input';
import { VscAdd } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";
import { IArticleAction } from './types';
import styles from './index.module.css';

const ArticleAction = function(props: IArticleAction) {

  const { onAdd, onSearch } = props;
  const searchTextRef = useRef('');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    searchTextRef.current = e.target.value;
  }

  return (
    <div className={styles.article_action}>
      <div className={styles.action_search}>
        <GoSearch onClick={() => onSearch(searchTextRef.current)} />
        <Input className={styles.search_input} onChange={onChange} />
      </div>
      <VscAdd onClick={onAdd} />
    </div>
  )
};

export default ArticleAction;
