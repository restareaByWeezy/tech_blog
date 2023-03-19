/* eslint-disable react-hooks/exhaustive-deps */
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';

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
  const handleSave = () => {
    setIsEdit(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isEdit) return;
    if (e.key === 'Escape') {
      setIsEdit(false);
    }
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    }
  };

  useEffect(() => {
    if (isEdit) {
      editorRef.current?.getInstance().moveCursorToEnd();
    }
  }, [isEdit]);

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
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.editorWrapper}>
        <Editor
          viewer
          height="auto"
          previewHighlight
          initialValue={contents}
          previewStyle="vertical"
          initialEditType="markdown"
          theme="dark"
          hideModeSwitch
          useCommandShortcut={true}
          ref={editorRef}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['code', 'codeblock'],
          ]}
          onChange={onChange}
        />
      </div>
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
  );
};

export default WriteContent;
