import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
    cy.visit("https://www.duckduckgosdsd.com");
});

Then("I should see a search bar", () => {
    cy.get("input").should(
        "have.attr",
        "placeholder",
        "Search the web without being tracked"
    );
});
