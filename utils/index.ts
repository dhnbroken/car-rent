import { FilterProps, ICar } from '@/types';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  headers: {
    'X-RapidAPI-Key': 'ad974631dcmsh8470d1be9063c0dp1e709ejsnc60f1b1499e8',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
});

const getCar = async (filters: FilterProps) => {
  const { model, manufacturer, year, fuel, limit } = filters;
  try {
    const response = await axiosClient.get('/', {
      params: { model, make: manufacturer, year: year, fuel_type: fuel, limit }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

const generateCarImageUrl = (car: ICar, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export { getCar, calculateCarRent, generateCarImageUrl, updateSearchParams };
