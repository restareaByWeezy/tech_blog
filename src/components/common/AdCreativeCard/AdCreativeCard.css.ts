import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const metricsList = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

export const metricsWrapper = style({
  width: '100%',
  padding: `0 ${vars.space.s20}`,
});
