/// <reference types="Cypress" />
/// <reference path="../support/index.js" />

var createForm = 'create_workstrong_app.json';
var upDateForm = 'update_workstrong_app.json';
var holdForm = 'onHold_workstrong_app.json'
const { BSAS_ADMIN } = require('../constant/users.constant');
import UiAction from '../plugins/common/page_actions'
import * as config from '../support/config';
import { findstatus } from '../fixtures/export.js';
import * as assertions from '../fixtures/assertions';
import workstrongFormCollection from '../plugins/common/function_collectors/collection_workstrong_from';
import FetchOnHoldWorkstrongForm from '../support/objectMapper/onHold_workstrong_map'

describe('OnHold Workstrong assessment Form', () => {
    let CreateWorkstrongForm = new FetchOnHoldWorkstrongForm({});
    let CreateWorkstrongAdjuster = new FetchOnHoldWorkstrongForm({});
    let CreateBasicInfo = new FetchOnHoldWorkstrongForm({});
    let CreateRecentClaim = new FetchOnHoldWorkstrongForm({});
    let CreatePreviousClaim = new FetchOnHoldWorkstrongForm({});
    let CreatePriorInjuries = new FetchOnHoldWorkstrongForm({});
    let updateContactInfo = new FetchOnHoldWorkstrongForm({});
    let updateIntialReview = new FetchOnHoldWorkstrongForm({});
    let updateHRMedical = new FetchOnHoldWorkstrongForm({});
    let updateContactAttempts = new FetchOnHoldWorkstrongForm({});
    let updateProgramType = new FetchOnHoldWorkstrongForm({});
    let updateProgramCompletion = new FetchOnHoldWorkstrongForm({});
    let updateOnHold = new FetchOnHoldWorkstrongForm({});
    let WorkstrongCollection = new workstrongFormCollection({});
    let pageAction = new UiAction()
    const todaysDate = Cypress.moment().format('MM/DD/YYYY')

    before(() => {
        /* cy.fixture(createForm).then((fetchUserData) => {
            CreateWorkstrongForm = new FetchCreateWorkstrongForm(fetchUserData[0].navigate_page)
            CreateWorkstrongAdjuster = new FetchCreateWorkstrongForm(fetchUserData[0].adjuster_information)
            CreateBasicInfo = new FetchCreateWorkstrongForm(fetchUserData[0].basic_information)
            CreateRecentClaim = new FetchCreateWorkstrongForm(fetchUserData[0].most_recent_claim)
            CreatePreviousClaim = new FetchCreateWorkstrongForm(fetchUserData[0].previous_claim)
            CreatePriorInjuries = new FetchCreateWorkstrongForm(fetchUserData[0].prior_injuries)
        })
        cy.fixture(upDateForm).then((fetchUserData) => {
            updateContactInfo = new FetchUpdateWorkstrongForm(fetchUserData[0].contact_information)
            updateIntialReview = new FetchUpdateWorkstrongForm(fetchUserData[0].intial_review)
            updateHRMedical = new FetchUpdateWorkstrongForm(fetchUserData[0].hr_medical_clearance)
            updateContactAttempts = new FetchUpdateWorkstrongForm(fetchUserData[0].contact_attempts)
            updateProgramType = new FetchUpdateWorkstrongForm(fetchUserData[0].program_type)
            updateProgramCompletion = new FetchUpdateWorkstrongForm(fetchUserData[0].program_completion)
        }) */

        cy.fixture(holdForm).then((fetchUserData) => {
            CreateWorkstrongForm = new FetchOnHoldWorkstrongForm(fetchUserData[0].navigate_page)
            CreateWorkstrongAdjuster = new FetchOnHoldWorkstrongForm(fetchUserData[0].adjuster_information)
            CreateBasicInfo = new FetchOnHoldWorkstrongForm(fetchUserData[0].basic_information)
            CreateRecentClaim = new FetchOnHoldWorkstrongForm(fetchUserData[0].most_recent_claim)
            CreatePreviousClaim = new FetchOnHoldWorkstrongForm(fetchUserData[0].previous_claim)
            CreatePriorInjuries = new FetchOnHoldWorkstrongForm(fetchUserData[0].prior_injuries)
            updateContactInfo = new FetchOnHoldWorkstrongForm(fetchUserData[0].contact_information)
            updateIntialReview = new FetchOnHoldWorkstrongForm(fetchUserData[0].intial_review)
            updateHRMedical = new FetchOnHoldWorkstrongForm(fetchUserData[0].hr_medical_clearance)
            updateContactAttempts = new FetchOnHoldWorkstrongForm(fetchUserData[0].contact_attempts)
            updateProgramType = new FetchOnHoldWorkstrongForm(fetchUserData[0].program_type)
            updateProgramCompletion = new FetchOnHoldWorkstrongForm(fetchUserData[0].program_completion)
            updateOnHold = new FetchOnHoldWorkstrongForm(fetchUserData[0].onHold)
        })
        pageAction.resetApp().then((win) => {
            win.sessionStorage.clear()
        })
    })



    beforeEach(() => {
        cy.login(BSAS_ADMIN.id);
    });


    it('navigate Create App', () => {
        global.statusCheck = "ENROLLED"
        WorkstrongCollection.navigateRss(CreateWorkstrongForm.cr_home_url);
        cy.getCookies().spread(($ele) => {
            global.fetchToken = $ele.value
        })
    });

    it('search and edit application form', () => {
        // cy.log("global.hashValue ", global.hashValue)
        //temp
        // global.hashValue = "41179c2c-1453-42f5-9399-901a9f98cbf1"
        //temp
        var fetchTokenValue = global.fetchToken
        var fetchHashValue = global.hashValue
        var getStatusCheck = global.statusCheck
        cy.StatusVerify(getStatusCheck, fetchHashValue, fetchTokenValue)
        WorkstrongCollection.searchReadyStatus(fetchHashValue, getStatusCheck)
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


    it('Navigate to Next page of the form', () => {
        WorkstrongCollection.NextpageNavigate()
    });

    it('Contact Information', () => {
        WorkstrongCollection.userContactInfo(updateContactInfo.up_primary_contact, updateContactInfo.up_secondary_contact, updateContactInfo.up_email, updateContactInfo.up_notes)
    });

    it('Initial Review', () => {
        WorkstrongCollection.userPotientialAssessment(updateIntialReview.up_review_date)
    });

    it('HR/Risk Manager & Medical Clearance', () => {
        WorkstrongCollection.hrMedicatlClearance(updateHRMedical.up_hr_request_date, updateHRMedical.up_hr_cleared_date, updateHRMedical.up_med_cleared_date);
    });

    it('Contact Attempts', () => {
        WorkstrongCollection.contactAttempts(updateContactAttempts.up_contact_type, updateContactAttempts.up_contact_date, updateContactAttempts.up_contact_note, updateContactAttempts.up_next_contact_date);
    });

    it('On Hold && Program Completion', () => {
        WorkstrongCollection.holdHistroyYes(updateOnHold.up_onhold_start, updateOnHold.up_onhold_end, updateOnHold.up_onhold_reason);
        // WorkstrongCollection.programCompletion(updateProgramCompletion.up_Completed, updateProgramCompletion.up_dateofCompletion);
    });

    it('Wellness Submit Application', () => {
        WorkstrongCollection.WellnessSubmit(assertions.sedgwick_form.saveForm_successmsg)
    });

});


function setToken () {
    cy.setCookie('authtoken', config.Authorization.auth);
}
