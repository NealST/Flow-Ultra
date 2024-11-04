// get dirs list in notes

import { readDir, BaseDirectory } from "@tauri-apps/plugin-fs";

const getDirList = async function () {
  try {
    const entries = await readDir("notes", {
      baseDir: BaseDirectory.AppLocalData,
    });
    return entries;
  } catch (e) {
    return [];
  }
};

export default getDirList;
