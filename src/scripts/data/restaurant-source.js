import ENDPOINT from '../globals/end-point';
import SIZE from '../globals/picture-size';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantById(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static getRestaurantImageByPictureId(pictureId, size) {
    switch (size) {
      case SIZE.SMALL:
        return ENDPOINT.PICTURE_SMALL(pictureId);
      case SIZE.MEDIUM:
        return ENDPOINT.PICTURE_MEDIUM(pictureId);
      case SIZE.LARGE:
        return ENDPOINT.PICTURE_LARGE(pictureId);
      default:
        return ENDPOINT.PICTURE_SMALL(pictureId);
    }
  }
}

export default RestaurantSource;
