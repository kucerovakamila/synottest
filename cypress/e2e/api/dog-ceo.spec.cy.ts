import { dogApi } from './helper/dog-ceo.api';

describe('Dog CEO API', () => {
    it('GET /random image returns 200 with valid image URL', () => {
        dogApi.getRandomImage().then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.status).to.eq('success');
            expect(res.body.message).to.be.a('string');
            expect(res.body.message).to.match(/^https?:\/\/.+\.jpg$/);
        });
    });
    it('GET /list/all response matches expected list', () => {
        cy.fixture('dog-breeds.json').then((expected) => {
            dogApi.getBreedList().then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body.status).to.eq('success');
                expect(res.body.message).to.deep.equal(expected.message);
            });
        });
    });
    it('GET /random image by breed returns correct breed', () => {
        const breed = 'bulldog';

        dogApi.getImageByBreed(breed).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.status).to.eq('success');

            const imgUrl = String(res.body.message);
            const url = new URL(imgUrl);

            expect(url.pathname).to.include(`${breed}`);
            expect(url.pathname).to.include('.jpg');
        });

    });
    it('GET /random image by invalid breed returns 404', () => {
        const breed = 'cat';

        dogApi.getImageByBreed(breed, { failOnStatusCode: false }).then((res) => {
            expect(res.status).to.eq(404);
            expect(res.body.status).to.eq('error');
        });
    });
});
