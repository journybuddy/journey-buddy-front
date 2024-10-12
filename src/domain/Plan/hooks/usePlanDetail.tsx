import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const getPlanDetail = async (planId?: number) => {
  const { data } = await axiosInstance.get(API_PLAN.getPlanDetail + planId);
  return data;
};

export const usePlanDetail = (planId?: number) => {
  const queryOptions = {
    queryKey: ['planDetail', planId], 
    queryFn: () => getPlanDetail(planId), 
  };

  const { data: planDetail, error, isLoading } = useQuery(queryOptions);

  return { planDetail, error, isLoading };
};
