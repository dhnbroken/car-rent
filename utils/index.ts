import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  headers: {
    'X-RapidAPI-Key': 'ad974631dcmsh8470d1be9063c0dp1e709ejsnc60f1b1499e8',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
});

interface getCarParams {
  model: string;
  make?: string;
}

const getCar = async ({ model }: getCarParams) => {
  try {
    const response = await axiosClient.get('/', { params: { model: model } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getCar };
