import cx from 'classnames';
import { get } from 'lodash';

import { ColumnProps } from './table';
import * as styles from './Table.css';

interface TableRowCellProps<T> {
  item: T;
  column: ColumnProps<T>;
  columnIndex: number;
}

export function TableRowCell<T>({
  item,
  column,
  columnIndex,
}: TableRowCellProps<T>): JSX.Element {
  const value = get(item, column.key);
  const { x } = item as { x: string }; // FIX: NEED FIX
  return (
    <>
      {columnIndex === 0 ? (
        <td className={cx(styles.td, column.style?.bodyColStyle)}>{x}</td>
      ) : (
        <td className={cx(styles.td, column.style?.bodyColStyle)}>
          {column.render ? column.render(column, item) : value}
        </td>
      )}
    </>
  );
}
