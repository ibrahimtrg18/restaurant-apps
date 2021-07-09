import CONFIG from './config';

const ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  PICTURE_SMALL: (id) => `${CONFIG.BASE_URL}/images/small/${id}`,
  PICTURE_MEDIUM: (id) => `${CONFIG.BASE_URL}/images/medium/${id}`,
  PICTURE_LARGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
};

export default ENDPOINT;
