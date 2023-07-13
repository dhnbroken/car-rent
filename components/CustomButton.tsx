'use client';

import React from 'react';
import { ICustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  btnType = 'button',
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled
}: ICustomButtonProps) => {
  return (
    <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
