import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMUNITY } from '../../../constants/apiList';

const deletePost = async (postId: number): Promise<void> => {
  return axiosInstance.delete(`${API_COMMUNITY.getCommunityDetail}${postId}`);
};

export const usePostDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communityList'] }); 
      queryClient.invalidateQueries({ queryKey: ['myPost'] }); 
      queryClient.invalidateQueries({ queryKey: ['topPicks'] });

    },
    onError: (error: Error) => {
        console.error('Error:', error);
    },
  });
};
