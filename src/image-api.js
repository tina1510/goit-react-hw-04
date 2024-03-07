import axios from 'axios'
axios.defaults.baseURL = `https://api.unsplash.com`;
const fetchImages = async(query, page = 1)  => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: query,
      perPage: 12,
      page,
      orientation: `landscape`
    },
    headers: {
      Authorization: `Client-ID EOgERfpfB-EQqEODQV-45UpmnKztxgoVey__W1l2AHU`
    }
  });
  return response.data.results;
}

export default fetchImages;

