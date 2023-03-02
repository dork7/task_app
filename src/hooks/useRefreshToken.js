import axios from '../config/axios';
import useAuth from './useAuth';

export const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/auth/refresh-token', {
      withCredentials: true,
    });
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};
