export const USER_AVATAR = "https://img.freepik.com/free-photo/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai_188544-9720.jpg?t=st=1765290456~exp=1765294056~hmac=3dd1dad2a5a8520623da507da2cd7dc5a734e43eb2a11a35cd93832a121f5325&w=1480";

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
]

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

