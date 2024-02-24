import { FC } from 'react';

type Props = {
  className?: string;
};

export const IconCross: FC<Props> = ({ className = `` }) => {
  return (
    <svg className={`${className}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};
