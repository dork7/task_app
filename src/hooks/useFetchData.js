import { useQuery } from "react-query";
import axios from "axios";

const fetchData = async (URL) => {
  const resp = await axios.get(`${URL}`);
  return await resp.data;
};

export const useFetchData = (key, URL, enableFetch) => {
  const { data, error, isLoading } = useQuery(
    [key, URL],
    () => fetchData(URL),
    { enabled: enableFetch, refetchOnWindowFocus: false }
  );
  //   dispatch and action
  return { data, error, isLoading };
};
