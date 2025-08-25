// cypress/e2e/api/openholidays.spec.cy.ts
import { openHolidays } from './helper/open-holidays.api';
describe('OpenHolidays API test', () => {
    it('GET /PublicHolidays SK for Q4 returns correct response', () => {
        cy.fixture('country-iso-codes.json').then(({ countries, languages }) => {
            const params = {
                countryIsoCode: countries.Slovakia,
                languageIsoCode: languages.Slovak,
                validFrom: '2025-09-01',
                validTo: '2025-12-31'
            };

            cy.fixture('public-holiday-sk-q4-result.json').then((expected: any[]) => {
                openHolidays.getPublicHolidays(params).then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.be.an('array');

                    const actual = res.body as any[];
                    expect(actual).to.deep.equal(expected);
                });
            });
        });
    });
});