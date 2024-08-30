import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';
import { getStoredUser } from '../../../utils/userStorage';

const getMyScraps = async () => {
  const { data } = await axiosInstance.get(API_MY_PAGE.getMyScraps);
  return data;
};

export const useMyScraps = () => {
  const queryOptions = {
    queryKey: ['myScraps'], 
    queryFn: getMyScraps, 
  };

  const { data: myScraps, error, isLoading } = useQuery(queryOptions);

  return { myScraps, error, isLoading };
};
