import { ColumnProps } from './table';
import * as styles from './Table.css';
import { TableRowCell } from './TableRowCell';
interface TableRowProps<T> {
  data: T[];
  columns: ColumnProps<T>[];
}

const TableRow = <T,>({ data, columns }: TableRowProps<T>) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr className={styles.tr} key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
              columnIndex={columnIndex}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
