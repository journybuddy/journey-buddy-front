import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_PLAN } from '../../../constants/apiList';

const getTourInfo = async (areaCode?: string, sigunguCode?: string, preference?: string) => {
  const { data } = await axiosInstance.get(API_PLAN.getTourInfo(areaCode, sigunguCode, preference));
  return data;
};

export const useTourInfo = (areaCode?: string, sigunguCode?: string, preference?: string) => {
  const queryOptions = {
    queryKey: ['tourInfo', areaCode, sigunguCode, preference],
    queryFn: () => getTourInfo(areaCode, sigunguCode, preference),
  };

  const { data: tourInfoData, error, isLoading } = useQuery(queryOptions);

  return { tourInfoData, error, isLoading };
};
