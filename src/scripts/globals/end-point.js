const BASE_URL = 'https://restaurant-api.dicoding.dev';

const ENDPOINT = {
  LIST: `${BASE_URL}/list`,
  DETAIL: (id) => `${BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${BASE_URL}/search?q=${query}`,
  REVIEW: `${BASE_URL}/review`,
  PICTURE_SMALL: (id) => `${BASE_URL}/images/small/${id}`,
  PICTURE_MEDIUM: (id) => `${BASE_URL}/images/medium/${id}`,
  PICTURE_LARGE: (pictureId) => `${BASE_URL}/images/large/${pictureId}`,
};

export default ENDPOINT;
