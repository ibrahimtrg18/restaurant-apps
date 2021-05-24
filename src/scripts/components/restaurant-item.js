class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <img
          class="restaurant-item__image"
          src="${this._restaurant.pictureId}"
        />
        <div class="restaurant-item__location">${this._restaurant.city}</div>
        <div class="restaurant-item__info">
          <h2><a href="${this._restaurant.id}">${this._restaurant.name}</a></h2>
          <p>${this._restaurant.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
