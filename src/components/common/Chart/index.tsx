import { ChartType, Query } from '@cubejs-client/core';
import { QueryBuilder } from '@cubejs-client/react';

import { dashboardStore } from '@/store/dashboardStore';
import { cubejsApi } from '@/utils/dashboardUtils';
import { mergeCubeQuery } from '@/utils/mergeCubeQuery';

import Loader from '../Lottie/Loader';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

interface ChartProps {
  chartConfigs?: Query;
  type: ChartType;
  // 'line' | 'bar' | 'table' | 'area' | 'number' | 'pie';
}

const Chart = ({ type, chartConfigs }: ChartProps) => {
  const { dateRange } = dashboardStore();
  const cubeQuery = mergeCubeQuery(dateRange, chartConfigs);

  return (
    <QueryBuilder
      defaultChartType={type}
      query={cubeQuery}
      cubejsApi={cubejsApi}
      render={(renderers) => {
        const { resultSet, loadingState } = renderers;

        if (loadingState?.isLoading) {
          return <Loader center />;
        }

        switch (type) {
          case 'bar':
            return <BarChart resultSet={resultSet} />;
          case 'line':
            return <LineChart resultSet={resultSet} />;
          case 'pie':
            return <PieChart resultSet={resultSet} />;
          default:
            return <BarChart resultSet={resultSet} />;
        }
      }}
    />
  );
};

export default Chart;
