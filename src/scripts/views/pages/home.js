import RestaurantSource from '../../data/restuarant-source';
import RestaurantItem from '../templates/restaurant-item';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero-inner__title">Track Your Dinner Journey</h1>
          <p class="hero-inner__tagline">Let's try all food around the world</p>
        </div>
      </div>
      <section class="content">
        <h1 class="content__title">Explore Restaurant</h1>
        <div id="restaurants" class="content__restaurants"></div>
      </section>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += RestaurantItem(restaurant);
    });
  },
};

export default Home;
