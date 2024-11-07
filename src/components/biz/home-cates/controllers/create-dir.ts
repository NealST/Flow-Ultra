// create dir for notes

import { mkdir } from '@tauri-apps/plugin-fs';
import getAppPath from '@/utils/get-app-path';

const createDir = async function(dirName: string) {
  const appPath = await getAppPath();
  console.log('appPath', appPath);
  const ret = await mkdir(`${appPath}/notes`);
  return ret;
}

export default createDir;
