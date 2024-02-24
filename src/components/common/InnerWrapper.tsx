import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const InnerWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="inner__wrapper w-full max-w-[1080px] mx-auto px-5 font-jost lg:px-5 md:px-5 sm:px-10 xs:px-8">
      {children}
    </div>
  );
};

export default InnerWrapper;
