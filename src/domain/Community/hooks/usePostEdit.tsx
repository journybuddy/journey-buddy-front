// hooks/usePostEdit.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMUNITY } from '../../../constants/apiList';

const editPost = async (formData: FormData): Promise<string> => {
  const response = await axiosInstance.put(
    `${API_COMMUNITY.getCommunityDetail}${formData.get('postId')}`, 
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  
  return response.data.postId; 
};

export const usePostEdit = () => {
  const queryClient = useQueryClient();

  return useMutation<string, Error, FormData>({
    mutationFn: editPost, 
    onSuccess: (postId) => {  
      queryClient.invalidateQueries({ queryKey: ['communityList'] }); 
      queryClient.invalidateQueries({ queryKey: ['myPost'] }); 
      queryClient.invalidateQueries({ queryKey: ['communityDetail', postId] });  
      queryClient.invalidateQueries({ queryKey: ['topPicks'] });

    },
    onError: (error: Error) => {
      console.error('Error:', error);
    },
  });
};
