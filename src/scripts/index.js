import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/restaurant.scss';
import './components/restaurant-list';
import { getRestaurants } from './utils/getRestaurants';
import App from './app';

const restaurants = document.getElementById('restaurants');
const restaurantListElement = document.createElement('restaurant-list');

const main = async () => {

  const res = await getRestaurants();

  restaurantListElement.restaurants = res.restaurants;

  restaurants.appendChild(restaurantListElement);

};

main();

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
})
