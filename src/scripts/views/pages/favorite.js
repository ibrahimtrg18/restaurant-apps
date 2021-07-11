import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantItem from '../templates/restaurant-item';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h1 class="content__title">Favorite Restaurant</h1>
        <div id="restaurants" class="content__restaurants"></div>
      </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += RestaurantItem(restaurant);
    });
  },
};

export default Favorite;
