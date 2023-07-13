import { manufacturers } from './../constants/index';
import { MouseEventHandler, SetStateAction } from 'react';

export interface ICustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ICustomFilter {
  title: string;
  options: OptionProps[];
  setFilter: (filter: string) => void;
}

export interface IManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
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

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICar;
}

export interface FilterProps {
  model: string;
  manufacturer: string;
  year: string;
  fuel: string;
  limit: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}
