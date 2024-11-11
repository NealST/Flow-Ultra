// read article file
import { exists } from "@tauri-apps/plugin-fs";
import * as path from "@tauri-apps/api/path";
import getAppPath from "@/utils/get-app-path";
import { NOTES_PATH } from "@/constants";
import { readTextFile, BaseDirectory } from "@tauri-apps/plugin-fs";

const getArticlePath = async function (
  selectedDir: string,
  selectedArticle: string
) {
  const appPath = await getAppPath();
  const dirPath = await path.join(appPath, NOTES_PATH, selectedDir);
  const articlePath = await path.join(dirPath, selectedArticle);
  const isArticleExist = await exists(articlePath);
  if (!isArticleExist) {
    return "";
  }
  return articlePath;
};

const getArticleContent = function (
  selectedDir: string,
  selectedArticle: string
) {
  if (!selectedDir || !selectedArticle) {
    return "";
  }
};

export default getArticleContent;
