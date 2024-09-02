export type Props = {
  name: string;
  createdAt: string;
  description: string;
  urlDoc: string;
  repositoryGit: string;
  id: string;
  refetch: () => void;
};

export type FormValues = {
  name: string;
  description: string;
  urlDoc: string;
  repositoryGit: string;
};
