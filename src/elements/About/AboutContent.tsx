import Col from '@/components/common/_Grid/Col';
import Paragraph from '@/components/common/Text/Paragraph';
import Text from '@/components/common/Text/Text';
import { textFadeIn } from '@/styles/animation.css';
import { vars } from '@/styles/vars.css';

import * as styles from './AboutContent.css';

const AboutContent = () => {
  return (
    <Col gap={vars.space.s30}>
      <div className={styles.animatedTextWrapper}>
        <Text className={styles.animatedText}>ChillinMice</Text>
        <Text className={styles.animatedText}>ChillinMice</Text>
      </div>
      <Paragraph className={styles.paragraph} size="h2">
        프로덕트에 대한 사업적 이해를 바탕으로
        <br /> 알맞은 해결방안을 모색하고 <br /> 비즈니스 가치로 구현하는
        개발자입니다.
      </Paragraph>
    </Col>
  );
};

export default AboutContent;
