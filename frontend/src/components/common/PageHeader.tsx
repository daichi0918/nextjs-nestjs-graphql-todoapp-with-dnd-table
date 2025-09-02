import { FC, memo } from 'react';

type Props = {
  title: string;
};

const PageHeader: FC<Props> = ({ title }) => (
  <h2 className="text-xl font-bold">{title}</h2>
);

export default memo(PageHeader);
