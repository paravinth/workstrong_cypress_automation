
var createForm = 'create_workstrong_app.json'
import * as config from '../support/config'
import { findstatus } from '../fixtures/export.js';

import workstrongFormCollection from '../plugins/common/function_collectors/collection_workstrong_from';
import FetchCreateWorkstrongForm from '../support/objectMapper/create_workstrong_map';

describe('Workstrong assessment Form', () => {
    let CreateWorkstrongForm = new FetchCreateWorkstrongForm({});
    let WorkstrongCollection = new workstrongFormCollection({});

    before(() => {
        cy.fixture(createForm).then((fetchUserData) => {
            CreateWorkstrongForm = new FetchCreateWorkstrongForm(fetchUserData[0].navigate_page)
        })

        setToken();
    })


    if (findstatus.edit_bsas_form !== false && findstatus.edit_bsas_form !== null) {

        it('navigate Create App', () => {
            setToken();
            WorkstrongCollection.navigateRss(CreateWorkstrongForm.cr_home_url)
            WorkstrongCollection.navigateCreateApp()
        });
    }

});


function setToken () {
    cy.setCookie('authtoken', config.Authorization.auth);
}
