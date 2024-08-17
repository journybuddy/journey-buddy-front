import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMINITY } from '../../../constants/apiList';

const getCommunityList = async () => {
  const { data } = await axiosInstance.get(API_COMMINITY.getCommunityList);
  return data;
};

export const useCommunityList = () => {
  const queryOptions = {
    queryKey: ['communityList'], 
    queryFn: getCommunityList, 
  };

  const { data: communityList, error, isLoading } = useQuery(queryOptions);

  return { communityList, error, isLoading };
};
