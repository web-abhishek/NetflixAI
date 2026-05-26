export const USER_AVATAR = "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg";

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
  { identifier: "en", name: "Eng" },
  { identifier: "hindi", name: "Hin" },
  { identifier: "spanish", name: "Spa" },
]

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

