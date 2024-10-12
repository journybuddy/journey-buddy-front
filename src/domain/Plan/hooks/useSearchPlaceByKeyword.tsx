import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const searchPlaceByKeyword = async (keyword: string) => {
  const { data } = await axiosInstance.get(API_PLAN.searchPlace(keyword));
  return data;
};

export const useSearchPlaceByKeyword = (keyword: string) => {
  const queryOptions = {
    queryKey: ['searchPlace', keyword],
    queryFn: () => searchPlaceByKeyword(keyword),
    enabled: !!keyword,
  };

  const { data: places, error, isLoading } = useQuery(queryOptions);

  return { places, error, isLoading };
};
