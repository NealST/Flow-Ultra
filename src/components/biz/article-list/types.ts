export interface IArticleItem {
  type: string;
  name: string;
}

export interface IArticleList {
  dataSource: IArticleItem[];
  onNewArticleComplete: (name: string) => void;
  onRemove: (index: number) => void;
  onRename: (name: string, index: number) => void;
  onSelectArticle: (name: string, index: number) => void;
}
