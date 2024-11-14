// wysiwyg editor
import { useRef, RefObject } from 'react';
import styles from './index.module.css';

type IProps = {
  initialContent?: string;
  onChange?: (newContent: string) => void;
  onBlur?: () => void;
}

const Wysiwyg = function(props: IProps) {

  const { initialContent = '', onChange, onBlur } = props;
  const editorRef: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div className={styles.wysiwyg} ref={editorRef}>
      
    </div>
  )
};

export default Wysiwyg;

