import { readDir, exists } from '@tauri-apps/plugin-fs';
import * as path from '@tauri-apps/api/path';
import getAppPath from '@/utils/get-app-path';
import { NOTES_PATH } from '@/constants';

const getArticles = async function(selectedDir: string) {
  const appPath = await getAppPath();
  const notesPath = await path.join(appPath, NOTES_PATH);
  const isNotesExists = await exists(notesPath);
  if (!isNotesExists) {
    return [];
  }
  const dirPath = await path.join(notesPath, selectedDir);
  const isDirExists = await exists(dirPath);
  if (!isDirExists) {
    return [];
  }
  const entries = await readDir(dirPath);
  return entries;
};

export default getArticles;
