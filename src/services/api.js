const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};