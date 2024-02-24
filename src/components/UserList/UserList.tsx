import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddButton from '@components/common/AddButton';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { HTTP_STATUS } from '@constants';
import { addUser, getAllUsers } from '@dux/reducers/users';
import { useCreateUser } from '@hooks/useCreateUser';
import { User } from '@types';
import UserItem from './UserItem';

const UserList: FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.users);
  const { createUser } = useCreateUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    job: '',
  });

  const loadData = async () => {
    dispatch(getAllUsers() as any);
  };

  const handleChange = (name: string, value: string) => {
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    createUser({ name: newUser.name, job: newUser.job });

    dispatch(addUser({ name: newUser.name, job: newUser.job }));
    setIsModalOpen(!isModalOpen);
    setNewUser({
      name: '',
      job: '',
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="user-list__area py-10">
      <h2 className="title font-italiana mb-10 font-bold text-4xl uppercase">User List</h2>

      <div className="user-list__inner grid grid-cols-4 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        <AddButton onClick={toggleModal}>Add new</AddButton>
        {loading === HTTP_STATUS.FULFILLED && data.data.map((user: User) => <UserItem key={user.id} user={user} />)}
      </div>

      {isModalOpen && (
        <Modal title="Add new user" closeModal={toggleModal}>
          <form className="grid space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter user name"
                value={newUser.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Job
              </label>
              <select
                id="job"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={newUser.job}
                onChange={(e) => handleChange('job', e.target.value)}
              >
                <option value="" disabled>
                  Choose a position
                </option>
                <option value="Bookkeeper">Bookkeeper</option>
                <option value="Nurse">Nurse</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Animator">Animator</option>
                <option value="Call center agent">Call center agent</option>
                <option value="Cashier">Cashier</option>
                <option value="Corporate Trainer">Corporate Trainer</option>
              </select>
            </div>
            <Button type="submit">Add</Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UserList;
