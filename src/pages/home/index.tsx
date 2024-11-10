// 首页
import Cates from '@/components/biz/home-cates';
import Articles from '@/components/biz/home-articles';
import styles from './index.module.css';

const Home = function() {
  return (
    <div className={styles.home}>
      <Cates />
      <Articles />
      <div className={styles.home_article_panel}></div>
    </div>
  )
}

export default Home;
