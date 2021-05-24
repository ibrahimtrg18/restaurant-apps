import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/restaurant-list';
import { getRestaurants } from './utils/getRestaurants';

const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburger');
const restaurants = document.getElementById('restaurants');
const restaurantListElement = document.createElement('restaurant-list');

hamburger.addEventListener('click', () => {
  drawer.classList.toggle('show');
});

const main = async () => {
  const res = await getRestaurants();

  restaurantListElement.restaurants = res.restaurants;

  restaurants.appendChild(restaurantListElement);
};

main();
