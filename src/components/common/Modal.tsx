import { FC, ReactNode } from 'react';
import { IconCross } from './IconCross';

type Props = {
  children: ReactNode;
  title: string;
  closeModal: () => void;
};

const Modal: FC<Props> = ({ children, title, closeModal }) => {
  return (
    <div
      aria-hidden="true"
      className="overflow-y-auto grid overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-black-transparent"
    >
      <div className="relative w-96 max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-2xl text-gray-900">{title}</h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={closeModal}
            >
              <IconCross className="w-3 h-3" />
            </button>
          </div>

          <div className="p-4 md:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
