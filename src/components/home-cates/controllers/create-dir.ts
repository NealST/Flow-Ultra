// create dir for notes

import { mkdir, BaseDirectory } from '@tauri-apps/plugin-fs';

const createDir = async function(dirName: string) {
  const ret = await mkdir(`notes/${dirName}`, {
    baseDir: BaseDirectory.AppLocalData
  });
  return ret;
}

export default createDir;
