export type Props = {
  id: string;
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
  refetch: () => void;
};

export type FormValues = {
  companyName: string;
  isActive: boolean;
  collaboratorsCount: string;
};
