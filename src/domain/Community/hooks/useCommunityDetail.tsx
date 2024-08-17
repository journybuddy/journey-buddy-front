import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMINITY } from '../../../constants/apiList';

const getCommunityDetail = async (postId?: number) => {
  const { data } = await axiosInstance.get(API_COMMINITY.getCommunityDetail + postId);
  return data;
};

export const useCommunityDetail = (postId?: number) => {
  const queryOptions = {
    queryKey: ['communityDetail', postId], 
    queryFn: () => getCommunityDetail(postId), 
  };

  const { data: communityDetail, error, isLoading } = useQuery(queryOptions);

  return { communityDetail, error, isLoading };
};
