import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import { getRestaurants } from './utils/getRestaurants';

const main = async () => {
  const restaurants = await getRestaurants();
  console.log(restaurants);
};

main();
