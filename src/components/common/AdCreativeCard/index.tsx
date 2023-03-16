import Col from '../_Grid/Col';
import Card from '../Card';
import Text from '../Text/Text';
import * as styles from './AdCreativeCard.css';

type MetricType = {
  name: string;
  label: string;
  value: string;
};

interface AdCreativeCardProps {
  img: string;
  metrics: MetricType[];
}

const AdCreativeCard = ({ img, metrics }: AdCreativeCardProps) => {
  const metricList = metrics.map(metric => {
    return (
      <li className={styles.metricsList} key={metric.name}>
        <Text>{metric.label}</Text>
        <Text>{metric.value}</Text>
      </li>
    );
  });

  return (
    <Card size="full">
      <Col full>
        <img src={img} alt="img" />
        <ul>{metricList}</ul>
      </Col>
    </Card>
  );
};

export default AdCreativeCard;
