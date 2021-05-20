const baseUrl = new Request('DATA.json');

const status = (response) => {
  if (response.status >= 400) {
    console.log('Error: ', +response.status);

    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
};

const json = (response) => {
  return response.json();
};

const viewHtmlRestaurants = (data) => {
  return data;
};

const getRestaurants = () => {
  const response = fetch(baseUrl)
    .then(status)
    .then(json)
    .then(viewHtmlRestaurants)
    .catch((error) => console.log('getRestaurants Error: ', error));

  return response;
};

export { getRestaurants };
