const BASE_URL = 'https://openholidaysapi.org';

export class OpenHolidaysAPI {
    getPublicHolidays(params: {
        countryIsoCode: string;
        languageIsoCode: string;  
        validFrom: string;
        validTo: string;
    }) {
        const { countryIsoCode, languageIsoCode, validFrom, validTo } = params;
        return cy.request({
            url: `${BASE_URL}/PublicHolidays`,
            qs: { countryIsoCode, languageIsoCode, validFrom, validTo }
        });
    }
}

export const openHolidays = new OpenHolidaysAPI();
