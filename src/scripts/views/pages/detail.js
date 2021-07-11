import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import RestaurantDetail from '../templates/restaurant-detail';
import '../../../styles/restaurant-detail.scss';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer" class="like-button">&#10084;</div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantById(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = RestaurantDetail(restaurant);
  },
};

export default Detail;
