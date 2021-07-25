import RestaurantItem from '../../templates/restaurant-item';

class FavoriteRestaurantView {
  getTemplate() {
    return `
      <section class="content">
        <h1 class="content__title">Favorite Restaurant</h1>
        <div id="restaurant" class="content__restaurants"></div>
      </section>
    `;
  }

  showRestaurants(restaurant) {
    this.showFavoriteRestaurants(restaurant);
  }

  showFavoriteRestaurants(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce(
        (carry, item) => carry.concat(RestaurantItem(item)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;

    document
      .getElementById('restaurant')
      .dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantView;
