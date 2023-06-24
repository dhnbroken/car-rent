import { ICustomFilter } from '@/types';
import React from 'react';

const CustomFilter = ({ title }: ICustomFilter) => {
  return <div>{title}</div>;
};

export default CustomFilter;
