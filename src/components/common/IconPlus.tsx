import { FC } from 'react';

type Props = {
  className?: string;
};

export const IconPlus: FC<Props> = ({ className = `` }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className={`${className}`}>
      <path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
    </svg>
  );
};
