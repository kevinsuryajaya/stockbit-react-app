import axios from 'axios';

export const fetchData = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`;
  let response = await axios.get(url);
  let data = response.data;
  return data;
};
