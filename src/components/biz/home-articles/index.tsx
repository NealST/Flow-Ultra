// article list
import { useEffect, useState } from "react";
import useSelectedDirStore, {
  IState,
} from "../home-cates/controllers/use-dir-store";
import getArticles from "./controllers/get-articles";
import ArticleAction from "../home-article-action";
import ArticleList from "../article-list";
import useSelectedArticleStore, {
  IArticleState,
} from "./controllers/use-article-store";
import createArticle from "./controllers/create-article";
import { IArticleItem } from "@/components/biz/article-list/types";
import styles from "./index.module.css";

const Articles = function () {
  const [articleList, setArticleList] = useState([] as IArticleItem[]);
  const selectedDir = useSelectedDirStore((state: IState) => state.name);
  const { name: selectedArticle, setSelectedArticle } = useSelectedArticleStore(
    (state: IArticleState) => state
  );

  useEffect(() => {
    getArticles(selectedDir)
      .then((ret) => {
        console.log("articles result", ret);
        setArticleList(
          ret.map((item) => ({
            name: item.name,
            type: "file",
          }))
        );
        // select the first article by default
        setSelectedArticle(ret[0].name);
      })
      .catch(() => {
        setArticleList([]);
      });
  }, [selectedDir]);

  function onNewArticleComplete(newName: string) {
    const newArticleList = ([] as IArticleItem[]).concat(articleList);
    if (!newName) {
      newArticleList.shift();
      setArticleList(newArticleList);
      return;
    }
    createArticle(selectedDir, newName)
      .then(() => {
        // create dir successfully
        newArticleList[0] = {
          type: "file",
          name: newName,
        };
        setArticleList(newArticleList);
        // select this new article by default
        setSelectedArticle(newName);
      })
      .catch(() => {
        // create dir with exception
        newArticleList.shift();
        setArticleList(newArticleList);
      });
  }

  function onAdd() {
    const newArticleList = [
      {
        type: "input",
        name: "",
      },
    ].concat(articleList);
    setArticleList(newArticleList);
  }

  function onSearch() {}

  function onRemoveArticle() {}

  function onRenameArticle() {}

  return (
    <div className={styles.home_articles}>
      <ArticleAction onAdd={onAdd} onSearch={onSearch} />
      <ArticleList
        dataSource={articleList}
        onNewArticleComplete={onNewArticleComplete}
        onRemove={onRemoveArticle}
        onRename={onRenameArticle}
        onSelectArticle={(newName: string, index: number) =>
          setSelectedArticle(newName)
        }
        selectedArticle={selectedArticle}
      />
    </div>
  );
};

export default Articles;
