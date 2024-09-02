import axios from 'axios';
import type * as T from './types';

export const postPartners = async ({
  createdAt,
  description,
  name,
  repositoryGit,
  urlDoc,
}: T.PostPartners) => {
  const { data } = await axios.post<T.GetPartnersResponse[]>(
    'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners',
    { createdAt, name, description, repositoryGit, urlDoc },
  );

  return data;
};

export const getPartners = async () => {
  const { data } = await axios.get<T.GetPartnersResponse[]>(
    'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners',
  );

  return data;
};

export const putPartners = async ({
  createdAt,
  description,
  id,
  name,
  repositoryGit,
  urlDoc,
}: T.PutPartners) => {
  const { data } = await axios.put<T.GetPartnersResponse[]>(
    `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`,
    { createdAt, description, name, repositoryGit, urlDoc },
  );

  return data;
};

export const deletePartners = async (id: string) => {
  const { data } = await axios.delete<T.GetPartnersResponse[]>(
    `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`,
  );

  return data;
};
