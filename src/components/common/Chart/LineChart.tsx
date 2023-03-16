import { ResultSet } from '@cubejs-client/core';
import dayjs from 'dayjs';
import {
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { LineChart as Lines } from 'recharts';

import { tickFormatter } from '@/utils/dashboardUtils';

import { colors } from './_constants';

interface LineChartProps {
  resultSet?: ResultSet<any> | null | undefined;
}

const LineChart = ({ resultSet }: LineChartProps) => {
  //FIX: NEED TO DISCUSS WITH BACKEND TEAM
  const data = resultSet?.chartPivot().map(item => {
    return {
      ...item,
      x: tickFormatter(item.x),
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Lines
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'x'} />
        <YAxis />
        <Tooltip />
        <Legend />
        {resultSet?.seriesNames().map((series, i) => (
          <Line
            key={series.key}
            dataKey={series.key}
            name={series.title}
            stroke={colors[i]}
          />
        ))}
      </Lines>
    </ResponsiveContainer>
  );
};

export default LineChart;
