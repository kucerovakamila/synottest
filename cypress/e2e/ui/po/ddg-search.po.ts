
export class DdgSearchPO {
  visit() {
    cy.visit('/');
  }
  searchInput() {
    return cy.get('#searchbox_input');
  }
  resultItems(filter = '') {
  return cy.get(`[data-testid="result"]${filter}`);
  }
  resultLinks(filter = '') {
  return cy.get(`[data-testid="result"]${filter} a[data-testid="result-title-a"]`);
  }
}

export const ddg = new DdgSearchPO();
