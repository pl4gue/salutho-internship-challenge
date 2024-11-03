import axios, { AxiosResponse } from "axios";

interface APIResponse {
  result: string;
  error: string;
}

const fetchFromAPI = async (start: number, end: number): Promise<string> =>
  await axios
    .post(
      "http://localhost:8000/api/interval_lcm/",
      {
        start: start,
        end: end,
      },
      {
        headers: {
          Accept: "application/json",
        },
      },
    )
    .then((response) => {
      console.log(response.data);
      return response.data as APIResponse;
    })
    .catch((error) => {
      if (error.response) {
        const response = error.response as AxiosResponse;
        if (response.status == 400) {
          const data = response.data as APIResponse;
          throw Error(data.error);
        }
      }
      throw error;
    })
    .then((data) => data.result);

export default fetchFromAPI;
