// get the path for application
import * as path from '@tauri-apps/api/path';

const getAppPath = async function() {
  const home = await path.homeDir();
  const appPath = await path.join(home, 'flow-ultra');
  return appPath;
};

export default getAppPath;
