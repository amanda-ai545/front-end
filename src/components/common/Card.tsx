import { FC } from 'react';

import Button from '@components/common/Button';

type Props = {
  src: string;
  name: string;
  job: string;
  workOrders: number;
  tasks: number;
  roles: number;
};

const Card: FC<Props> = ({ src, name, job, workOrders, tasks, roles }) => {
  return (
    <div className="card grid justify-items-center p-5 bg-white rounded-lg shadow-lg shadow-gray-200">
      <img src={src} alt={name} className="mb-4 border-4 border-solid border-sky-100 rounded-full w-[135px]" />

      <div className="user-details__area text-center">
        <h3>{name}</h3>
        <p className="text-gray-400 text-xs">{job}</p>

        <div className="user-details__inner grid grid-cols-3 gap-2 py-5">
          <div>
            <p>{workOrders}</p>
            <p className="text-gray-400 text-[70%] uppercase font-medium">Work Orders</p>
          </div>
          <div>
            <p>{tasks}</p>
            <p className="text-gray-400 text-[70%] uppercase font-medium">Tasks</p>
          </div>
          <div>
            <p>{roles}</p>
            <p className="text-gray-400 text-[70%] uppercase font-medium">Roles</p>
          </div>
        </div>

        <Button>View Profile</Button>
      </div>
    </div>
  );
};

export default Card;
