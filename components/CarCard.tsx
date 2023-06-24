'use client';

import { ICar } from '@/types';
import React from 'react';

interface Props {
  car: ICar;
}

const CarCard = ({ car }: Props) => {
  const { city_mpg, drive, make, model, transmission, year } = car;
  return <div>CarCard</div>;
};

export default CarCard;
