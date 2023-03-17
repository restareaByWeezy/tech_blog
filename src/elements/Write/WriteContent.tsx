/* eslint-disable react-hooks/exhaustive-deps */
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import Button from '@/components/common/Button';

import ContentsViewer from './fragments/ContentViewer';
import * as styles from './WriteContent.css';

const WriteContent = () => {
  const [contents, setContents] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const editorRef = useRef<Editor>(null);

  const onChange = () => {
    const content = editorRef.current?.getInstance()?.getHTML() || '';
    setContents(content);
  };

  const handleEditNote = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    console.log(isEdit);
  }, [isEdit]);

  useEffect(() => {
    if (isEdit) {
      editorRef.current?.getInstance().moveCursorToEnd();
    }
  }, [isEdit]);

  const handleSave = () => {
    setIsEdit(false);
  };

  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (!isEdit) return;
  //   if (e.key === 'Escape') {
  //     handleCancel();
  //   }
  //   if (e.key === 'Enter' && e.ctrlKey) {
  //     handleSave();
  //   }
  // };
  const handleClickOutside = (e: MouseEvent) => {
    if (!isEdit) return;
    const target = e.target as HTMLElement;
    if (
      target.closest(`.${styles.editorWrapper}`) ||
      target.closest(`.${styles.viewerWrapper}`)
    ) {
      return;
    }
    setIsEdit(false);
    setContents('');
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.editorWrapper}>
      {isEdit ? (
        <>
          <Editor
            initialValue={contents}
            previewStyle="vertical"
            initialEditType="wysiwyg"
            theme="dark"
            useCommandShortcut={true}
            plugins={[colorSyntax]}
            height="100%"
            ref={editorRef}
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['code', 'codeblock'],
            ]}
            onChange={onChange}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="button"
              sizes="sm"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              취소
            </Button>
            <Button type="submit" sizes="sm" onClick={handleSave}>
              저장
            </Button>
          </div>
        </>
      ) : (
        <ContentsViewer contents={contents} handleEditNote={handleEditNote} />
      )}
    </div>
  );
};

export default WriteContent;
