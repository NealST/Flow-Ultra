// article list
import { useEffect, useState } from 'react';
import useSelectedDirStore, { IState } from '../home-cates/controllers/use-dir-store';
import getArticles from './controllers/get-articles';
import styles from './index.module.css';

const ArticleList = function() {
  const [dataSource, setDataSource] = useState([]);
  const selectedDir = useSelectedDirStore((state: IState) => state.name);

  useEffect(() => {
    getArticles(selectedDir).then(result => {
      console.log('articles result', result);
    }).then(() => {
      setDataSource([]);
    });
  }, []);

  const hasData = dataSource.length > 0;
  if (!hasData) {
    return null;
  }

  return (
    <div className={styles.article_list}>
      
    </div>
  )
};

export default ArticleList;
