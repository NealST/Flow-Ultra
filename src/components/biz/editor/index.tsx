import { useEffect, useState } from 'react';
import useSelectedDirStore, { IState } from '../home-cates/controllers/use-dir-store';
import useSelectedArticleStore, { IArticleState } from '@/components/biz/home-articles/controllers/use-article-store';
import getArticleContent from './controllers/get-article-content';
import styles from './index.module.css';

const Editor = function() {
  const [fileContent, setFileContent] = useState('');
  const selectedDir = useSelectedDirStore((state: IState) => state.name);
  const selectedArticle = useSelectedArticleStore((state: IArticleState) => state.name);

  useEffect(() => {
    getArticleContent(selectedDir, selectedArticle).then(content => {
      content && setFileContent(content);
    });
  }, [selectedDir, selectedArticle]);
  
  return (
    <div className={styles.editor}>
      
    </div>
  )
};

export default Editor;
