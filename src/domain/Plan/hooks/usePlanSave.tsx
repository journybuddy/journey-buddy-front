// hooks/usePostSave.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';
import { ScheduleInfo } from '@/types/interface/ScheduleInfo';

const savePlan = async (schedule?: ScheduleInfo): Promise<void> => {
  return axiosInstance.post(API_PLAN.savePlan, schedule);
};

export const usePlanSave = () => {
  return useMutation({
    mutationFn: savePlan,
  });
};
