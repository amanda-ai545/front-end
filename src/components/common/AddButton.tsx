import { FC, ReactNode } from 'react';
import { IconPlus } from './IconPlus';

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const AddButton: FC<Props> = ({ type, disabled, onClick, children }) => {
  return (
    <button
      type={type}
      className="grid content-center justify-center py-24 bg-slate-200 rounded-lg border-2 border-solid border-white uppercase transition-opacity duration-300 hover:opacity-70"
      disabled={disabled}
      onClick={onClick}
    >
      <span>
        <span className="grid content-center justify-center w-[120px] h-[120px] mb-4 border-4 border-solid border-sky-100 rounded-full bg-white text-sky-100 font-thin text-9xl">
          <IconPlus className="w-16 fill-sky-200" />
        </span>
        {children}
      </span>
    </button>
  );
};

export default AddButton;
