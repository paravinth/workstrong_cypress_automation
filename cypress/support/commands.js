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
import * as config from '../support/config'

var testone

Cypress.Commands.add('login', () => {
  cy.log('test')
});
Cypress.Commands.add('testing', () => {
  var testone
});
Cypress.Commands.add('StatusVerify', (status, hashValue) => {
  cy
    .request({
      url: 'https://dev.riskandsafety.com/workstrong/api/dashboard/wellness-program/role/DO/search/' + hashValue + '/itemsPerPage/25',
      method: 'GET',
      headers: config.ApiAuthorization
    }).then(function (resp) {
      expect(resp.body[0].statusType).to.eq(status)
      // cy.log(resp.body[0].statusType)
      if (status == resp.body[0].statusType) {
        cy.log("Status match")
      } else {
        cy.log("Status not match, Change your Application status");
      }
    })


})
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
