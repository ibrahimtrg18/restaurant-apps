import RestaurantSource from '../../data/restaurant-source';
import SIZE from '../../globals/picture-size';

const RestaurantItem = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__head">
      <img
        class="restaurant-item__image lazyload"
        src="/images/placeholder.jpg"
        data-src="
        ${RestaurantSource.getRestaurantImageByPictureId(
          restaurant.pictureId,
          SIZE.SMALL,
        )}"
        alt="${restaurant.name} image"
        width="100%"
        height="200"
      />
      <div class="restaurant-item__location">${restaurant.city}</div>
    </div>

    <div class="restaurant-item__body">
      <span class="restaurant-item__rating">Rating: ${restaurant.rating}</span>
      <h2 class="restaurant-item__info-name">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h2>
      <p class="restaurant-item__info-description">${restaurant.description}</p>
    </div>
  </div>`;

export default RestaurantItem;
