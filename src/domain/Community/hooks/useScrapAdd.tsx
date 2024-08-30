import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_COMMUNITY } from '../../../constants/apiList';
import { axiosInstance } from '../../../axios';

const addScrap = async ( postId : number) => {
    const response = await axiosInstance.post(API_COMMUNITY.addScrap(postId));
    return { postId, data: response.data }; 
};
  
  export const useScrapAdd = () => {
    const queryClient = useQueryClient();
  
    return useMutation<{ postId: number; data: any }, Error, number>({
      mutationFn: addScrap,
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