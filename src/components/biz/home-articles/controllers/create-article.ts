import { create } from '@tauri-apps/plugin-fs';
import getAppPath from '@/utils/get-app-path';
import ensureDir from '@/utils/ensure-dir';
import { NOTES_PATH } from '@/constants';

const createArticle = async function(dirName: string, articleName: string) {
  const appPath = await getAppPath();
  const notesPath = `${appPath}/${NOTES_PATH}`;
  await ensureDir(notesPath);
  const dirPath = `${notesPath}/${dirName}`;
  await ensureDir(dirPath);
  const file = await create(`${dirPath}/${articleName}.md`);
  await file.write(new TextEncoder().encode(''));
  await file.close();
  return true;
}

export default createArticle;
