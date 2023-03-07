import ScrollArea from '../ScrollArea';
import { TableProps } from './table';
import * as styles from './Table.css';
import TableHeader from './TableHead/TableHead';
import TableRow from './TableRow';

const Table = <T,>({ columns, data, tableStyle }: TableProps<T>) => {
  return (
    <div className={styles.scrollAreaWrapper}>
      <ScrollArea>
        <table className={tableStyle?.table || styles.table}>
          <thead className={tableStyle?.tableHead || styles.tableHead}>
            <TableHeader columns={columns} />
          </thead>
          <tbody className={tableStyle?.tableBody}>
            <TableRow data={data} columns={columns} />
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
};

export default Table;
