// hooks/usePostSave.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMUNITY } from '../../../constants/apiList';

const savePost = async (formData: FormData): Promise<void> => {
  return axiosInstance.post(API_COMMUNITY.savePost, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const usePostSave = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, FormData>({
    mutationFn: savePost, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communityList'] }); 
    },
    onError: (error: Error) => {
        console.error('Error:', error);
    },
  });
};
