// wysiwyg editor
import { useRef, RefObject, useState, ChangeEvent } from 'react';
import ToolBar from './toolbar';
import Editable from './editable';
import Outline from './outline';
import styles from './index.module.css';

type IProps = {
  initialContent?: string;
  onChange: (newContent: string) => void;
  onBlur?: () => void;
}

const Wysiwyg = function(props: IProps) {

  const { initialContent = '', onChange, onBlur } = props;

  return (
    <div className={styles.wysiwyg}>
      <ToolBar />
      <div className={styles.wysiwyg_editor}>
        <Editable initialHtml={initialContent} onChange={onChange} />
        <Outline />
      </div>
    </div>
  )
};

export default Wysiwyg;

