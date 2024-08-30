import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_COMMUNITY } from '../../../constants/apiList';
import { axiosInstance } from '../../../axios';

const deleteScrap = async ( postId : number) => {
    const response = await axiosInstance.delete(API_COMMUNITY.addScrap(postId));
    return { postId, data: response.data }; 
  };
  
  export const useScrapDelete = () => {
    const queryClient = useQueryClient();
  
    return useMutation<{ postId: number; data: any }, Error, number>({
      mutationFn: deleteScrap,
      onSuccess: ({ postId }) => {
        queryClient.invalidateQueries({ queryKey: ['communityDetail', postId] });
        queryClient.invalidateQueries({ queryKey: ['communityList'] });
        queryClient.invalidateQueries({ queryKey: ['myScraps'] }); 

      },
      onError: (error: Error) => {
        console.error('Error adding scrap:', error);
      },
    });
  };