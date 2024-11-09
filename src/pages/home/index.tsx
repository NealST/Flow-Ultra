// 首页
import Cates from '@/components/biz/home-cates';
import ArticleList from '@/components/biz/home-articles';
import styles from './index.module.css';

const Home = function() {
  return (
    <div className={styles.home}>
      <Cates />
      <div className={styles.home_articles}>
        <ArticleList />
      </div>
      <div className={styles.home_article_panel}></div>
    </div>
  )
}

export default Home;
