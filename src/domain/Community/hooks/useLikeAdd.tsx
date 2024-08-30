import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_COMMUNITY } from '../../../constants/apiList';
import { axiosInstance } from '../../../axios';

const addLike = async (postId: number) => {
  const response = await axiosInstance.post(API_COMMUNITY.addLike(postId));
  return { postId, data: response.data }; 
};

export const useLikeAdd = () => {
  const queryClient = useQueryClient();

  return useMutation<{ postId: number; data: any }, Error, number>({
    mutationFn: addLike,
    onSuccess: ({ postId }) => { 
      queryClient.invalidateQueries({ queryKey: ['communityDetail', postId] });
      queryClient.invalidateQueries({ queryKey: ['communityList'] });
      queryClient.invalidateQueries({ queryKey: ['topPicks'] });
      queryClient.invalidateQueries({ queryKey: ['myLikes'] });

    },
    onError: (error: Error) => {
      console.error('Error adding like:', error);
    },
  });
};
