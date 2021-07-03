import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import About from '../views/pages/about';

const routes = {
  '/': Home, // default page
  '/favorite': Favorite,
  '/about': About,
};

export default routes;
