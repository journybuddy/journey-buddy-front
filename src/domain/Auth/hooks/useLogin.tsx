import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_LOGIN } from '../../../constants/apiList';

const getKakaoLogin = async (code?: string) => {
  const { data } = await axiosInstance.post(
    `${API_LOGIN.getKakaoLogin}?&code=${code}`,
    );
  return data;
};

export const useKakaoLogin = (code?: string) => {
  const queryOptions = {
    queryKey: ['login', code], 
    queryFn: () => getKakaoLogin(code || undefined),
    enabled: !!code,
  };

  const { data: login, error, isLoading } = useQuery(queryOptions);

  return { login, error, isLoading };
};
