import { useRef, useState, RefObject, useCallback } from "react";
import debounce from "@/utils/debounce";
import styles from "./index.module.css";

type IProps = {
  initialHtml: string;
  onChange: (newContent: string) => void;
};

const Editable = function (props: IProps) {
  const { initialHtml, onChange } = props;
  const editableRef: RefObject<HTMLDivElement> = useRef(null);
  const [htmlContent, setHtmlContent] = useState(initialHtml);

  const onGetChange = useCallback(
    debounce(() => {
      const el = editableRef.current;
      if (el) {
        const newHtml = el.innerHTML;
        console.log("newHtml", newHtml);
        if (newHtml !== htmlContent) {
          setHtmlContent(newHtml);
          onChange(newHtml);
        }
      }
    }, 100),
    []
  );

  return (
    <div
      className={styles.editable}
      ref={editableRef}
      contentEditable
      onInput={onGetChange}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
};

export default Editable;
