export type Props = {
  refetch: () => void;
};

export type FormValues = {
  name: string;
  createdAt: string;
  description: string;
  urlDoc: string;
  repositoryGit: string;
};
