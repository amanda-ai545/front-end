import { FC } from 'react';

import Card from '@components/common/Card';
import { User } from '@types';

type Props = {
  user: User;
};

const UserItem: FC<Props> = ({ user }) => {
  return (
    <Card
      src={user.avatar}
      name={`${user.first_name} ${user.last_name}`}
      job={user.job ? user.job : `Employee`}
      workOrders={7} // static data
      tasks={14} // static data
      roles={2} // static data
    />
  );
};

export default UserItem;
