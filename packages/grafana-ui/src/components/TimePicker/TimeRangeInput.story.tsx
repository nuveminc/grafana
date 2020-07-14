import React from 'react';
import { action } from '@storybook/addon-actions';
import { dateTime, TimeFragment } from '@grafana/data';
import { withCenteredStory } from '../../utils/storybook/withCenteredStory';
import { UseState } from '../../utils/storybook/UseState';
import { InputTimeRange, TimeRangeInput } from './TimeRangeInput';
import mdx from './TimeRangeInput.mdx';

export default {
  title: 'Pickers and Editors/TimePickers/TimeRangeInput',
  component: TimeRangeInput,
  decorators: [withCenteredStory],
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const basic = () => {
  return (
    <UseState
      initialState={
        {
          from: dateTime(),
          to: dateTime(),
          raw: { from: 'now-6h' as TimeFragment, to: 'now' as TimeFragment },
        } as InputTimeRange
      }
    >
      {(value, updateValue) => {
        return (
          <TimeRangeInput
            value={value}
            onChange={timeRange => {
              action('onChange fired')(timeRange);
              updateValue(timeRange);
            }}
          />
        );
      }}
    </UseState>
  );
};

export const clearable = () => {
  return (
    <UseState
      initialState={
        {
          from: dateTime(),
          to: dateTime(),
          raw: { from: 'now-6h' as TimeFragment, to: 'now' as TimeFragment },
        } as InputTimeRange
      }
    >
      {(value, updateValue) => {
        return (
          <TimeRangeInput
            clearable
            value={value}
            onChange={timeRange => {
              action('onChange fired')(timeRange);
              updateValue(timeRange);
            }}
          />
        );
      }}
    </UseState>
  );
};
