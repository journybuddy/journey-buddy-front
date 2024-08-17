import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MAIN_PAGE } from '../../../constants/apiList';

const getTopPicks = async () => {
  const { data } = await axiosInstance.get(API_MAIN_PAGE.getTopPicks);
  return data;
};

export const useTopPicks = () => {
  const queryOptions = {
    queryKey: ['topPicks'], 
    queryFn: getTopPicks, 
  };

  const { data: topPicks, error, isLoading } = useQuery(queryOptions);

  return { topPicks, error, isLoading };
};
