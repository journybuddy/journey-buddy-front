import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';
import { PlanData } from '../../../types/interface/PlanData';

const createAIPlan = async (planData: PlanData) => {
  const { data } = await axiosInstance.post(API_PLAN.createAIPlan, planData);
  return data;
};

export const useCreateAIPlan = () => {
  return useMutation({
    mutationFn: createAIPlan,
  });
};
