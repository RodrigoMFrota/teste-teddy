import axios from 'axios';
import type * as T from './types';

export const getPartners = async () => {
  const { data } = await axios.get<T.GetPartnersResponse[]>(
    'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners',
  );

  return data;
};

export const deletePartners = async (id: string) => {
  const { data } = await axios.delete<T.GetPartnersResponse[]>(
    `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`,
  );

  return data;
};
