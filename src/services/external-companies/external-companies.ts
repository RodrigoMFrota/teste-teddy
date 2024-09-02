import axios from 'axios';
import type * as T from './types';

export const getExternalCompanies = async () => {
  const { data } = await axios.get<T.GetExternalCompaniesResponse[]>(
    'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies',
  );

  return data;
};

export const deleteExternalCompanies = async (id: string) => {
  const { data } = await axios.delete<T.GetExternalCompaniesResponse[]>(
    `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`,
  );

  return data;
};
