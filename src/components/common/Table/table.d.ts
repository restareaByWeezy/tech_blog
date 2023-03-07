export interface ColumnProps<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: ColumnProps<T>, item: T) => void;
  style?: {
    headerColStyle?: string;
    bodyColStyle?: string;
  };
}

interface TableStyle {
  table?: string;
  tableHead?: string;
  tableBody?: string;
  tableRow?: string;
  tableCell?: string;
}

export interface TableProps<T> {
  size?: 'sm' | 'md' | 'lg';
  data: T[];
  columns: ColumnProps<T>[];
  tableStyle?: TableStyle;
}
