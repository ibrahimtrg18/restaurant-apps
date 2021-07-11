import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import RestaurantDetail from '../templates/restaurant-detail';
import '../../../styles/restaurant-detail.scss';
import LikeButtonInitiator from '../../utils/like-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer" class="like-button"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantById(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = RestaurantDetail(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
