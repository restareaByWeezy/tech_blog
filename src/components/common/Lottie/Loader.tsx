import Lottie from 'react-lottie-player';

import { spinner } from '@/assets/lotties';
import { cx } from '@/styles/classNames';

import * as styles from './Loader.css';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  container?: string;
}

const Loader = ({ size, container, center }: LoaderProps) => {
  return (
    <div className={cx(center ? styles.container : '', container)}>
      <Lottie
        className={styles.wrapper({ size: size })}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        loop
        animationData={spinner}
        play
      />
    </div>
  );
};

export default Loader;
