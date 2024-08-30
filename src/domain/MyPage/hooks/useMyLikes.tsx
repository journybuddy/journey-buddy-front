import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';

const getMyLikes = async () => {
  const { data } = await axiosInstance.get(API_MY_PAGE.getMyLikes);
  return data;
};

export const useMyLikes = () => {
  const queryOptions = {
    queryKey: ['myLikes'], 
    queryFn: getMyLikes, 
  };

  const { data: myLikes, error, isLoading } = useQuery(queryOptions);

  return { myLikes, error, isLoading };
};
