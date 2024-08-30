import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';

const getMyPosts = async () => {
  const { data } = await axiosInstance.get(API_MY_PAGE.getMyPosts);
  return data;
};

export const useMyPosts = () => {
  const queryOptions = {
    queryKey: ['myPosts'], 
    queryFn: getMyPosts, 
  };

  const { data: myPosts, error, isLoading } = useQuery(queryOptions);

  return { myPosts, error, isLoading };
};
