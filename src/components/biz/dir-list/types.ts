// 类型声明

export interface IDirItem {
  type: string;
  name: string;
}

export interface IList {
  dataSource: IDirItem[];
  onNewDirComplete: (name: string) => void;
  onRemove: (index: number) => void;
  onRename: (name: string, index: number) => void;
  onSelectDir: (name: string, index: number) => void;
  selectedDir: string;
}
