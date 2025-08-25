import { ddg } from "./po/ddg-search.po";

const OFFICIAL_DOMAIN = 'www.synotgames.com';

describe('DuckDuckGo Search - Synot Games', () => {
  beforeEach(() => {
    cy.request('/').its('status').should('eq', 200);
    ddg.visit();
  });

it('searching for synot games returns results successfully', () => {
    ddg.searchInput().type('synot games{enter}');
    ddg.resultItems().should('exist');

});
  it('searching synot games returns it in the top 3 results', () => {
    ddg.searchInput().type('synot games{enter}');
    ddg.resultLinks(':lt(3)')
       .filter((i, el) => (el.getAttribute('href') || '').includes(OFFICIAL_DOMAIN))
       .should('have.length.at.least', 1);
  });

  it('minor typo in search should still show official site in top 3', () => {
    ddg.searchInput().type('sinot gaems{enter}');
    ddg.resultLinks(':lt(3)')
       .filter((i, el) => (el.getAttribute('href') || '').includes(OFFICIAL_DOMAIN))
       .should('have.length.at.least', 1);
  });
});
