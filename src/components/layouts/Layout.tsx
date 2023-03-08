import { ReactNode } from 'react';

import * as styles from './Layout.css';

interface LayoutProps {
  content: ReactNode;
}

const Layout = ({ content }: LayoutProps) => {
  return <div className={styles.container}>{content}</div>;
};

export default Layout;
