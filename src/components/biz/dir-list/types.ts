// 类型声明

export interface IDirItem {
  // 文件类型
  type: string;
  // 路径
  path?: string;
  // 名称
  name?: string;
}

export interface IList {
  dataSource: IDirItem[];
  // 新增文件夹命名完成
  onNewDirComplete: (name: string) => void;
  // 删除文件
  onRemove: (index: number) => void;
  // 重命名
  onRename: (name: string, index: number) => void;
}
