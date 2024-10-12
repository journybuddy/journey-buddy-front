import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';

const getMyPlans = async () => {
  const { data } = await axiosInstance.get(API_MY_PAGE.getMyPlans);
  return data;
};

export const useMyPlans = () => {
  const queryOptions = {
    queryKey: ['myPlans'], 
    queryFn: getMyPlans, 
  };

  const { data: myPlans, error, isLoading } = useQuery(queryOptions);

  return { myPlans, error, isLoading };
};
