export type PostExternalCompanies = {
  companyName: string;
  isActive: boolean;
  collaboratorsCount: number;
};

export type GetExternalCompaniesResponse = {
  id: string;
  name: string;
  createdAt: string;
  companyName: string;
  lastSubmit: string;
  collaboratorsCount: number;
  isActive: boolean;
};

export type PutExternalCompanies = {
  companyName: string;
  isActive: boolean;
  collaboratorsCount: number;
  id: string;
};
