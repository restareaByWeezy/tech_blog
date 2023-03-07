import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { ko } from 'date-fns/locale';
import React from 'react';
import { DateRange as Picker, Range, RangeKeyDict } from 'react-date-range';

import { vars } from '@/styles/vars.css';

interface DateRangeProps {
  onChange: ((rangesByKey: RangeKeyDict) => void) | undefined;
  ranges: Range[] | undefined;
}

const DateRange = ({ onChange, ranges }: DateRangeProps) => {
  return (
    <Picker
      locale={ko}
      monthDisplayFormat="yyyy년 MMM"
      showDateDisplay={false}
      showMonthAndYearPickers={false}
      months={1}
      onChange={onChange}
      moveRangeOnFirstSelection={false}
      ranges={ranges}
      direction="horizontal"
      rangeColors={[vars.color.primary]}
    />
  );
};

export default DateRange;
