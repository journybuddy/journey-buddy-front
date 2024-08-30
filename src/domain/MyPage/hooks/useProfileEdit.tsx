import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';

const editProfile = async (formData: FormData): Promise<any> => {
  const response = await axiosInstance.put(`${API_MY_PAGE.editProfile}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log(response)
  return response.data; 
};

export const useProfileEdit = () => {

  return useMutation<any, Error, FormData>({
    mutationFn: editProfile, 
    onSuccess: (userId) => {  
    },
    onError: (error: Error) => {
      console.error('Error:', error);
    },
  });
};
