'use client';

import React from 'react';
import { ICustomButtonProps } from '@/types';

const CustomButton = ({ title, btnType = 'button', containerStyles, handleClick }: ICustomButtonProps) => {
  return (
    <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
