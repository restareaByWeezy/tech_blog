import { ResultSet } from '@cubejs-client/core';
import { Cell, Legend, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as Pies } from 'recharts';

import { colors } from './_constants';

interface PieChartProps {
  resultSet?: ResultSet<any> | null | undefined;
}

const PieChart = ({ resultSet }: PieChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Pies>
        <Pie
          isAnimationActive={false}
          data={resultSet?.chartPivot()}
          nameKey="x"
          dataKey={resultSet?.seriesNames()[0].key as string}
        >
          {resultSet?.chartPivot().map((e, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </Pies>
    </ResponsiveContainer>
  );
};

export default PieChart;
