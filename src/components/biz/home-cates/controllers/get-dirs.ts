// get dirs list in notes

import { readDir } from "@tauri-apps/plugin-fs";
import getAppPath from "@/utils/get-app-path";
import { NOTES_PATH } from '@/constants';
import ensureDir from '@/utils/ensure-dir';

const getDirList = async function () {
  try {
    const appPath = await getAppPath();
    const notesPath = `${appPath}/${NOTES_PATH}`;
    await ensureDir(notesPath);
    const entries = await readDir(notesPath);
    return entries;
  } catch (e) {
    return [];
  }
};

export default getDirList;
