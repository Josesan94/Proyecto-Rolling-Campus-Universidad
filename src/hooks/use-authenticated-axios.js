import axios from 'axios';
import { useMemo } from 'react';
import useAuth from '../components/auth/useAuth';

export const useAuthenticatedAxios = () => {
  const { user } = useAuth();
  const { token } = user;

  return useMemo(
    () =>
      axios.create({
        baseURL: 'http://localhost:3001/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    [token],
  );
};
