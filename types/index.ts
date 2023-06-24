import { manufacturers } from './../constants/index';
import { MouseEventHandler, SetStateAction } from 'react';

export interface ICustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICustomFilter {
  title: string;
}

export interface IManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturers: string) => void;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICars {
  car: ICar;
  message: string;
}
