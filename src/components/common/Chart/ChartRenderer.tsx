import { CubejsApi, Query, ResultSet } from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import React from 'react';

interface ChartProps {
  cubejsApi?: CubejsApi;
  query: Query | Query[];
  render: (renderProps: ResultSet) => void;
}

const Chart = ({ cubejsApi, query, render }: ChartProps) => (
  <QueryRenderer
    query={query}
    cubejsApi={cubejsApi}
    render={({ resultSet }) => {
      if (!resultSet) {
        return <div className="loader" />;
      }

      return render(resultSet);
    }}
  />
);

export default Chart;
