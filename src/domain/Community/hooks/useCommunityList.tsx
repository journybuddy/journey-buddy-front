import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_COMMUNITY } from '../../../constants/apiList';

interface SearchParams {
  location?: string;
  sort?: string;
}

const searchCommunityList = async (searchParams : SearchParams) => {
  const hasSearchParams = Object.keys(searchParams).length > 0;

  if (hasSearchParams) {
    const { data } = await axiosInstance.get(API_COMMUNITY.searchPosts, {
      params: {
        page: 0,
        ...searchParams,
      },
    });
    console.log(data)
    return data;
  } else {
    const { data } = await axiosInstance.get(API_COMMUNITY.getCommunityList);
    return data;
  }
};


export const useCommunityList = (searchParams : SearchParams) => {
  const queryOptions = {
    queryKey: ['communityList', searchParams],
    queryFn: () => searchCommunityList(searchParams),
  };

  const { data: communityList, error, isLoading } = useQuery(queryOptions);

  return { communityList, error, isLoading };
};
