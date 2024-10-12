import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const deletePlan = async (planId: number): Promise<void> => {
  return axiosInstance.delete(`${API_PLAN.deletePlan}${planId}`);
};

export const usePlanDelete = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: deletePlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myPlans'] }); 

    },
    onError: (error: Error) => {
        console.error('Error:', error);
    },
  });
};
