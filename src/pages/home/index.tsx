// 首页
import HomeCates from '@/components/biz/home-cates';
import styles from './index.module.css';

const Home = function() {
  return (
    <div className={styles.home}>
      <HomeCates />
      <div className={styles.home_articles}></div>
      <div className={styles.home_article_panel}></div>
    </div>
  )
}

export default Home;
