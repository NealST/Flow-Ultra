// create dir for notes

import { mkdir } from '@tauri-apps/plugin-fs';
import getAppPath from '@/utils/get-app-path';
import ensureDir from '@/utils/ensure-dir';
import { NOTES_PATH } from '@/constants';

const createDir = async function(dirName: string) {
  const appPath = await getAppPath();
  const notesPath = `${appPath}/${NOTES_PATH}`;
  await ensureDir(notesPath);
  const ret = await mkdir(`${notesPath}/${dirName}`);
  return ret;
}

export default createDir;
