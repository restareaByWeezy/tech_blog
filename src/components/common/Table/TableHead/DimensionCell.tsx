import { cx } from '@/styles/classNames';

import * as styles from '../Table.css';

interface DimensionCellProps {
  idx: number;
  title: string;
  width: number;
  style?: string;
}

const DimensionCell = ({ idx, title, width, style }: DimensionCellProps) => {
  return (
    <th
      key={`table-head-cell-${idx}`}
      style={{ width: width }}
      className={cx(styles.th, style)}
    >
      {title}
    </th>
  );
};

export default DimensionCell;
