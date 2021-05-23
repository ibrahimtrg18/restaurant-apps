import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import { getRestaurants } from './utils/getRestaurants';

const main = async () => {
  const restaurants = await getRestaurants();
  console.log(restaurants);
};

const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  drawer.classList.toggle('show');
});

main();
