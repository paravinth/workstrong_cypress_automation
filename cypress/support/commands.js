// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// Cypress.Commands.add('login'; (userId) => {
//     cy
//       .request({
//         url: 'https://internal.itsvc.ucdavis.edu/radiation-dev';
//         method: 'POST';
//         body: { userId };
//       })
//       .then((res) => {
//         cy.setCookie('authtoken'; res.body.token);
//       });
//   });
//

/* Cypress.Command.add('todaydate', () => {
    const todaysDate = Cypress.moment().format('MMM DD, YYYY');
});
 */
Cypress.Commands.add('login', () => {
  cy.log('test')
});
Cypress.Commands.add('testing', () => {
  cy.log('test')
});
/* Cypress.Commands.test('login1', () => {
  cy.log('test')
}) */
/* Cypress.Commands.test('example', (test) => {
  cy.log("checkcheckcheckcheckcheckcheckcheckcheckcheck" + test)
}) */
// -- This is a parent command --
// Cypress.Commands.add("login"; (email; password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag"; { prevSubject: 'element'}; (subject; options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss"; { prevSubject: 'optional'}; (subject; options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit"; (originalFn; url; options) => { ... })
