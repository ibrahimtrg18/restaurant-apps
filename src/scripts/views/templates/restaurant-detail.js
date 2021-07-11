import RestaurantSource from '../../data/restaurant-source';
import SIZE from '../../globals/picture-size';

const RestaurantMenuItem = (name) => `<li>${name}</li>`;

const RestaurantMenu = (foods) =>
  foods.map((food) => RestaurantMenuItem(food.name)).join('');

const RestaurantCustomerReviewItem = (review) => `
    <li class="restaurant-detail__review-item">
        <div class="restaurant-detail__review-item__head">
            <h4>${review.name}</h4>
            <span>${review.date}</span>
        </div>
        <div class="restaurant-detail__review-item__body">
            <p>${review.review}</p>
        </div>
    </li>
`;

const RestaurantCustomerReview = (customerReviews) =>
  customerReviews
    .map((review) => RestaurantCustomerReviewItem(review))
    .join('');

const RestaurantDetail = (restaurant) => ` 
    <div class="restaurant-detail">
        <img
            class="restaurant-detail__image"
            src="${RestaurantSource.getRestaurantImageByPictureId(
              restaurant.pictureId,
              SIZE.LARGE,
            )}"
            alt="${restaurant.name} image"
        />
        <div class="restaurant-detail__location">${restaurant.city}</div>

        <div class="restaurant-detail__info">
            <h1 class="restaurant-detail__info-name">
                ${restaurant.name}
            </h1>
            <p class="restaurant-detail__info-address">${restaurant.address}</p>
            <span class="restaurant-detail__rating">
                Rating: ${restaurant.rating}
            </span>
            <p class="restaurant-detail__info-description">
                ${restaurant.description}
            </p>
        </div>

        <div class="restaurant-detail__menu">
            <h2>Menu</h2>
            <div class="restaurant-detail-menu__menu">
                <ul class="restaurant-detail-menu__food">
                    <h3>Foods</h3>
                    ${RestaurantMenu(restaurant.menus.foods)}
                </ul>
                <ul class="restaurant-detail-menu__drink">
                    <h3>Drinks</h3>
                    ${RestaurantMenu(restaurant.menus.drinks)}
                </ul>
            </div>
        </div>

        <div class="restaurant-detail__review">
            <h2>Customer Review</h2>
                <ul class="restaurant-detail__review-list">
                    ${RestaurantCustomerReview(restaurant.customerReviews)}
                </ul>
        </div>
    </div>`;

export const RestaurantDetailLikeButton = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <img src="/icons/like.svg"></img>
    </button>`;

export const RestaurantDetailLikedButton = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <img src="/icons/liked.svg"></img>
    </button>`;

export default RestaurantDetail;
