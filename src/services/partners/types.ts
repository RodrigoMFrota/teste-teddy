export type PostPartners = {
  name: string;
  createdAt: string;
  description: string;
  urlDoc: string;
  repositoryGit: string;
  project: [];
  clients: [];
};

export type GetPartnersResponse = {
  id: string;
  name: string;
  createdAt: string;
  repositoryGit: string;
  urlDoc: string;
  description: string;
};

export type PutPartners = {
  name: string;
  createdAt: string;
  description: string;
  urlDoc: string;
  repositoryGit: string;
  id: string;
};
