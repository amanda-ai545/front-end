import { FC, ReactNode } from 'react';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<Props> = ({ type, disabled, onClick, children }) => {
  return (
    <button
      type={type}
      className="button py-1.5 px-5 rounded-full bg-sky-400 text-white transition-opacity duration-300 hover:opacity-70"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
