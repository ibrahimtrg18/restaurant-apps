import RestaurantSource from '../../data/restaurant-source';
import SIZE from '../../globals/picture-size';

const RestaurantItem = (restaurant) => `
<div class="restaurant-item">
  <div class="restaurant-item__head">
    <img
      class="restaurant-item__image"
      src="${RestaurantSource.getRestaurantImageByPictureId(
        restaurant.pictureId,
        SIZE.SMALL,
      )}"
      alt="${restaurant.name} image"
    />
    <div class="restaurant-item__location">${restaurant.city}</div>
  </div>

  <div class="restaurant-item__body">
    <span class="restaurant-item__rating"
      >Rating: ${restaurant.rating}</span
    >
    <h2 class="info__name">
      <a href="${restaurant.id}">${restaurant.name}</a>
    </h2>
    <p class="info__description">${restaurant.description}</p>
  </div>
</div>`;

export default RestaurantItem;
