import { ChartPivotRow, ResultSet } from '@cubejs-client/core';
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BarChart as Bars } from 'recharts';

import { tickFormatter } from '@/utils/dashboardUtils';

import { colors } from './_constants';

//FIX: NEED TO DISCUSS WITH BACKEND TEAM
interface BarChartProps {
  resultSet?: ResultSet<any> | null | undefined;
  infos?: { key: string; name: string }[];
  data?: [] | ChartPivotRow[];
}

const BarChart = ({ resultSet, data, infos }: BarChartProps) => {
  //FIX: NEED TO DISCUSS WITH BACKEND TEAM
  const cubeData = resultSet?.chartPivot().map(item => {
    return {
      ...item,
      x: tickFormatter(item.x),
    };
  });

  //render conditional bars depends on infos length
  const bars = () => {
    if (infos) {
      return infos.map((info, index) => (
        <Bar
          key={info.key}
          dataKey={info.key}
          fill={colors[index]}
          name={info.name}
        />
      ));
    } else {
      return resultSet
        ?.seriesNames()
        .map((series, index) => (
          <Bar
            key={series.key}
            dataKey={series.key}
            fill={colors[index]}
            name={series.shortTitle}
          />
        ));
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Bars
        data={data ? data : cubeData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'x'} tickFormatter={tickFormatter} />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars()}
      </Bars>
    </ResponsiveContainer>
  );
};

export default BarChart;
