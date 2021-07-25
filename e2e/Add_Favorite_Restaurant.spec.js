const assert = require('assert');

/* eslint-disable no-undef */
Feature('Add Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('#restaurant');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found',
  );
});

Scenario('add favorite one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__info-name a');
  const firstRestaurant = locate('.restaurant-item__info-name a').first();
  const firstRestaurantText = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('[aria-label="like this restaurant"]');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantText = await I.grabTextFrom(
    '.restaurant-item__info-name a',
  );

  assert.strictEqual(firstRestaurantText, favoriteRestaurantText);
});

Scenario(
  'add favorite one restaurant then unfavorite restaurant',
  async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.restaurant-item__info-name a');
    const firstRestaurant = locate('.restaurant-item__info-name a').first();
    const firstRestaurantText = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('#restaurant');
    I.seeElement('.restaurant-item');
    const favoriteRestaurantText = await I.grabTextFrom(
      '.restaurant-item__info-name a',
    );

    assert.strictEqual(firstRestaurantText, favoriteRestaurantText);

    I.click(firstRestaurant);

    I.seeElement('.restaurant-detail__info-name');
    const detailRestaurant = await I.grabTextFrom(
      '.restaurant-detail__info-name',
    );

    assert.strictEqual(detailRestaurant, favoriteRestaurantText);

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('#restaurant');
    I.dontSeeElement('.restaurant-item');
  },
);
