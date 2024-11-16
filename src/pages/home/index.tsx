// 首页
import Cates from '@/components/biz/home-cates';
import Articles from '@/components/biz/home-articles';
import Editor from '@/components/biz/editor';
import styles from './index.module.css';

const Home = function() {
  return (
    <div className={styles.home}>
      <Cates />
      <Articles />
      <Editor />
    </div>
  )
}

export default Home;
