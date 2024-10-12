import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const getCities = async (provinceCode: string) => {
  const { data } = await axiosInstance.get(API_PLAN.getCities(provinceCode));
  return data;
};

export const useCities = (provinceCode : string) => {
    const queryOptions = {
        queryKey: ['cities', provinceCode],
        queryFn: () => getCities(provinceCode),
        enabled: !!provinceCode, 
    };
  
    const { data: cities, error, isLoading } = useQuery(queryOptions);
  
    return { cities, error, isLoading };
  };
  
