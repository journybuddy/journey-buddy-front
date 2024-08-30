import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../axios';
import { API_MY_PAGE } from '../../../constants/apiList';

const getMyComments = async () => {
  const { data } = await axiosInstance.get(API_MY_PAGE.getMyComments);
  return data;
};

export const useMyComments = () => {
  const queryOptions = {
    queryKey: ['myComments'], 
    queryFn: getMyComments, 
  };

  const { data: myComments, error, isLoading } = useQuery(queryOptions);

  return { myComments, error, isLoading };
};
