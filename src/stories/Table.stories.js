import React from 'react';
import Table from '../Table.js';

export default {
  title: 'Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { id: 1, name: 'Tag 1', count: 100 },
    { id: 2, name: 'Tag 2', count: 200 },
  ],
  errorMessage: 'Error loading tags',
  isFetching: false,
};

export const Loading = Template.bind({});
Loading.args = {
  tags: [],
  errorMessage: '',
  isFetching: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  tags: [],
  errorMessage: 'Failed to fetch tags',
  isFetching: false,
};
