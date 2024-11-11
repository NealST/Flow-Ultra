// markdown show and edit
import { useEffect, useState } from 'react';
import useSelectedDirStore, { IState } from '../home-cates/controllers/use-dir-store';
import useSelectedArticleStore, { IArticleState } from '@/components/biz/home-articles/controllers/use-article-store';
import styles from './index.module.css';

const Markdown = function() {
  const [fileContent, setFileContent] = useState('');
  const selectedDir = useSelectedDirStore((state: IState) => state.name);
  const selectedArticle = useSelectedArticleStore((state: IArticleState) => state.name);
  
  return (
    <div className={styles.markdown}>
      
    </div>
  )

};

export default Markdown;
