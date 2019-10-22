/// <reference types="Cypress" />
/// <reference path="../support/index.js" />
const { BSAS_ADMIN } = require('../constant/users.constant');
var createForm = 'create_workstrong_app.json'
import * as config from '../support/config'
import { findstatus } from '../fixtures/export.js';
import * as assertions from '../fixtures/assertions'

import workstrongFormCollection from '../plugins/common/function_collectors/collection_workstrong_from';
import FetchCreateWorkstrongForm from '../support/objectMapper/create_workstrong_map';

describe('Draft Workstrong assessment Form', () => {
    let CreateWorkstrongForm = new FetchCreateWorkstrongForm({});
    let CreateWorkstrongAdjuster = new FetchCreateWorkstrongForm({});
    let CreateBasicInfo = new FetchCreateWorkstrongForm({});
    let CreateRecentClaim = new FetchCreateWorkstrongForm({});
    let CreatePreviousClaim = new FetchCreateWorkstrongForm({});
    let CreatePriorInjuries = new FetchCreateWorkstrongForm({});
    let WorkstrongCollection = new workstrongFormCollection({});
    const todaysDate = Cypress.moment().format('MM/DD/YYYY')

    beforeEach(() => {
        cy.login(BSAS_ADMIN.id);
    });

    before(() => {
        cy.fixture(createForm).then((fetchUserData) => {
            CreateWorkstrongForm = new FetchCreateWorkstrongForm(fetchUserData[0].navigate_page)
            CreateWorkstrongAdjuster = new FetchCreateWorkstrongForm(fetchUserData[0].adjuster_information)
            CreateBasicInfo = new FetchCreateWorkstrongForm(fetchUserData[0].basic_information)
            CreateRecentClaim = new FetchCreateWorkstrongForm(fetchUserData[0].most_recent_claim)
            CreatePreviousClaim = new FetchCreateWorkstrongForm(fetchUserData[0].previous_claim)
            CreatePriorInjuries = new FetchCreateWorkstrongForm(fetchUserData[0].prior_injuries)
        })

    })


    it('navigate Create App', () => {
        WorkstrongCollection.navigateRss(CreateWorkstrongForm.cr_home_url)
        WorkstrongCollection.navigateCreateApp()
    });

    it('Adjuster Information', () => {
        WorkstrongCollection.sedgwickAdjuster(CreateWorkstrongAdjuster.adjuster_name)
    });

    it('Basic Information', () => {
        WorkstrongCollection.SedgwickBasicInfo(CreateBasicInfo.client_firstname, CreateBasicInfo.client_lastname, CreateBasicInfo.client_dob, CreateBasicInfo.tpa_received_date, CreateBasicInfo.basic_department, CreateBasicInfo.basic_email, CreateBasicInfo.basic_phone_number, CreateBasicInfo.basic_secondary_phone_number, CreateBasicInfo.basic_referral_type, CreateBasicInfo.basic_referral_date, CreateBasicInfo.basic_location)
    });

    it('Most Recent Claim', () => {
        WorkstrongCollection.SedgwickRecentClaim(CreateRecentClaim.recent_claim_number, CreateRecentClaim.recent_medical_record_no, CreateRecentClaim.recent_icd9_code, CreateRecentClaim.recent_icd10_code, CreateRecentClaim.recent_date_ofinjury, CreateRecentClaim.recent_injury_bodyPart, CreateRecentClaim.recent_injury_sub_bodyPart, CreateRecentClaim.recent_nature_ofinjury, CreateRecentClaim.recent_nature_sub_ofinjury, CreateRecentClaim.recent_incident_type, CreateRecentClaim.recent_incident_sub_type, CreateRecentClaim.recent_medical_provider, CreateRecentClaim.recent_legacy_data)
    });

    it('Previous Claim', () => {
        WorkstrongCollection.SedgwickPreviousClaim(CreatePreviousClaim.previous_claim_number, CreatePreviousClaim.previous_medical_record_no, CreatePreviousClaim.previous_icd9_code, CreatePreviousClaim.previous_icd10_code, CreatePreviousClaim.previous_date_ofinjury, CreatePreviousClaim.previous_injury_bodyPart, CreatePreviousClaim.previous_injury_sub_bodyPart, CreatePreviousClaim.previous_nature_ofinjury, CreatePreviousClaim.previous_nature_sub_ofinjury, CreatePreviousClaim.previous_incident_type, CreatePreviousClaim.previous_incident_sub_type, CreatePreviousClaim.previous_medical_provider, CreatePreviousClaim.previous_legacy_data)
    });


    it('Prior Injuries', () => {
        WorkstrongCollection.SedgwickPriorInjuries(CreatePriorInjuries.prior_injuries_list, CreatePriorInjuries.prior_injuries_date)
    })

    it('Save Form', () => {
        WorkstrongCollection.SedgwickSave(assertions.sedgwick_form.saveForm_successmsg)
    })
});


function setToken () {
    cy.setCookie('authtoken', config.Authorization.auth);
}
