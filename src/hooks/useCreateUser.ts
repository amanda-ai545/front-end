import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

import { BASE_URL } from '@constants';
import { CreateUser } from '@types';

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AxiosResponse<unknown, unknown>>();
  const [error, setError] = useState(null);

  const createUser = async (userData: CreateUser) => {
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/users/create`, userData);
      setData(response);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, createUser };
};
