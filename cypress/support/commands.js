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
Cypress.Commands.add('StatusVerify', (status, hashValue, tokenValue) => {
  cy
    .request({
      url: 'https://dev.riskandsafety.com/workstrong/api/dashboard/wellness-program/role/DO/search/' + hashValue + '/itemsPerPage/25',
      method: 'GET',
      headers: { "Authorization": "Bearer " + tokenValue + "" }
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


const cache = {};
const TOKEN_CLIENT_NAME = Cypress.env('TOKEN_CLIENT_NAME');
const TOKEN_URL = Cypress.env('TOKEN_URL');

Cypress.Commands.add('login', (userId) => {
  cy.clientToken().then((clientToken) => {
    cy.userToken(userId, clientToken);
  });
});

Cypress.Commands.add('clientToken', () => {
  const clientToken = cache[TOKEN_CLIENT_NAME];
  if (clientToken) {
    return clientToken;
  }
  return cy
    .request('POST', `${TOKEN_URL}/clients/register`, {
      name: TOKEN_CLIENT_NAME,
      key: Cypress.env('TOKEN_CLIENT_KEY'),
    })
    .then((res) => {
      cache[TOKEN_CLIENT_NAME] = res.body.clientApplicationToken;
      return res.body.clientApplicationToken;
    });
});

Cypress.Commands.add('userToken', (userId, clientToken) => {
  const token = cache[userId];
  if (token) {
    return cy.setCookie('authtoken', token);
  }
  return cy
    .request({
      url: `${TOKEN_URL}/userToken/transform`,
      method: 'POST',
      headers: { authorization: `Bearer ${clientToken}` },
      body: { userId },
    })
    .then((response) => {
      cache[userId] = response.body.transformedToken;
      cy.setCookie('authtoken', response.body.transformedToken);
    });
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
