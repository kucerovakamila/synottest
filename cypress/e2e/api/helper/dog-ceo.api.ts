const BASE_URL = 'https://dog.ceo/api';

export class DogCeoAPI {
  getBreedList() {
    return cy.request(`${BASE_URL}/breeds/list/all`);
  }
  getRandomImage() {
    return cy.request(`${BASE_URL}/breeds/image/random`);
  }
  getImageByBreed(breed: string, options: Partial<Cypress.RequestOptions> = {}) {
  return cy.request({
    url: `${BASE_URL}/breed/${breed}/images/random`,
    ...options
  });
}
}

export const dogApi = new DogCeoAPI();