import Lottie from 'react-lottie-player';

import { dev } from '@/assets/lotties';
import Text from '@/components/common/Text/Text';

import * as styles from './Hero.css';

const Hero = () => {
  return (
    <section>
      <Text type="h1" size="h1" color="colorTertiary">
        Hi There!
      </Text>
      <div className={styles.lottieWrapper}>
        <Lottie
          className={styles.lottie}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          loop
          animationData={dev}
          play
        />
      </div>
    </section>
  );
};

export default Hero;
