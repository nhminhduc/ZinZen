describe("Basic Tests Home Page", () => {
  it("should have Home Page title", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[alt="ZinZen Text Logo"]').should("be.visible");
    cy.contains("Realize");
    cy.contains("dreams");
    cy.contains("together");
  });

  it("user choice panel for language choice should work", () => {
    cy.get(".containerLang").should("be.visible");
  });

  it("Theme & Language Selection", () => {
    cy.get(".lang-btn1").contains("English").click();
    cy.get(".themeChoice-btn-light").click();
  });

  it("Default entry page should be MyTime", () => {
    cy.contains("Skip Intro").click();
    cy.location("pathname").should("equal", "/");
    cy.get(".MyTime_container").should("be.visible");
  });
});
