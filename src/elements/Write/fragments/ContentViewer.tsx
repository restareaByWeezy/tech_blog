import { Viewer } from '@toast-ui/react-editor';

import * as styles from './ContentViewer.css';

interface ContentViewerProps {
  contents: string;
  handleEditNote: () => void;
}

const ContentViewer = ({ contents, handleEditNote }: ContentViewerProps) => {
  return (
    <div className={styles.viewerWrapper} onClick={handleEditNote}>
      <Viewer initialValue={contents || ''} />
      {!contents && (
        <div className={styles.placeholder}>내용을 입력해주세요.</div>
      )}
    </div>
  );
};

export default ContentViewer;
