import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_COMMUNITY } from '../../../constants/apiList';
import { axiosInstance } from '../../../axios';

interface AddCommentPayload {
  postId: number;
  comment: string;
}

const addComment = async ({ postId, comment }: AddCommentPayload) => {
  const response = await axiosInstance.post(API_COMMUNITY.addComment(postId), { comment });
  return response.data;
};

export const useCommentAdd = () => {
    const queryClient = useQueryClient();
  
    return useMutation<void, Error, AddCommentPayload>({
      mutationFn: addComment,
      onSuccess: (_, { postId }) => {
        queryClient.invalidateQueries({ queryKey: ['communityDetail', postId] });
        queryClient.invalidateQueries({ queryKey: ['communityList'] });
        queryClient.invalidateQueries({ queryKey: ['topPicks'] });

      },
      onError: (error: Error) => {
        console.error('Error adding comment:', error);
      },
    });
  };