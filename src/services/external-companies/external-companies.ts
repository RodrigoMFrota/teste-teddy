import axios from 'axios';
import type * as T from './types';

export const postExternalCompanies = async ({
  companyName,
  collaboratorsCount,
  isActive,
}: T.PostExternalCompanies) => {
  const { data } = await axios.post<T.GetExternalCompaniesResponse[]>(
    'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies',
    { companyName, collaboratorsCount, isActive },
  );

  return data;
};

export const getExternalCompanies = async () => {
  const { data } = await axios.get<T.GetExternalCompaniesResponse[]>(
    'https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies',
  );

  return data;
};

export const putExternalCompanies = async ({
  companyName,
  collaboratorsCount,
  isActive,
  id,
}: T.PutExternalCompanies) => {
  const { data } = await axios.put<T.GetExternalCompaniesResponse[]>(
    `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`,
    { companyName, collaboratorsCount, isActive },
  );

  return data;
};

export const deleteExternalCompanies = async (id: string) => {
  const { data } = await axios.delete<T.GetExternalCompaniesResponse[]>(
    `https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`,
  );

  return data;
};
