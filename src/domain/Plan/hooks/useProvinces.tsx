import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const getProvinces = async () => {
  const { data } = await axiosInstance.get(API_PLAN.getProvinces);
  return data;
};

export const useProvinces = () => {
    const queryOptions = {
      queryKey: ['provinces'],
      queryFn: getProvinces,
    };
  
    const { data: province, error, isLoading } = useQuery(queryOptions);
  
    return { province, error, isLoading };
  };
  