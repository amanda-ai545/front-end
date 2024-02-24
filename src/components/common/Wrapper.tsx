import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return <div className="wrapper w-full h-full bg-zinc-100">{children}</div>;
};

export default Wrapper;
