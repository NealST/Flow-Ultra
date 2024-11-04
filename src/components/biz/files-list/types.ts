// 类型声明

interface IItem {
  // 文件类型
  type: 'dir' | 'input';
  // 路径
  path: string;
  // 名称
  name: string;
}

export interface IList {
  dataSource: IItem[];
  // 新增文件夹命名完成
  onNewInputComplete: (name: string) => void;
  // 删除文件
  onRemove: (index: number) => void;
  // 重命名
  onRename: (name: string) => void;
}
