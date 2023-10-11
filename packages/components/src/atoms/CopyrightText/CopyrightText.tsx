type Props = {
  name: string;
};

export const CopyrightText: React.FC<Props> = ({ name }) => {
  return <>Copyright { name }</>;
};
