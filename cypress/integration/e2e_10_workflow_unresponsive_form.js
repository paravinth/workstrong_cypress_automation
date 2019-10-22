/// <reference types="Cypress" />
/// <reference path="../support/index.js" />

const { BSAS_ADMIN } = require('../constant/users.constant');
var createForm = 'create_workstrong_app.json';
var upDateForm = 'update_workstrong_app.json';
var unResponsiveForm = 'unresponsive_workstrong_app.json';
import * as config from '../support/config';
import { findstatus } from '../fixtures/export.js';
import UiAction from '../plugins/common/page_actions'
import * as assertions from '../fixtures/assertions';
import workstrongFormCollection from '../plugins/common/function_collectors/collection_workstrong_from';
import FetchUnResponsiveWorkstrongForm from '../support/objectMapper/unResponsive_workstrong_map';

describe('Unresponsive Workstrong assessment Form', () => {
    let CreateWorkstrongForm = new FetchUnResponsiveWorkstrongForm({});
    let CreateWorkstrongAdjuster = new FetchUnResponsiveWorkstrongForm({});
    let CreateBasicInfo = new FetchUnResponsiveWorkstrongForm({});
    let CreateRecentClaim = new FetchUnResponsiveWorkstrongForm({});
    let CreatePreviousClaim = new FetchUnResponsiveWorkstrongForm({});
    let CreatePriorInjuries = new FetchUnResponsiveWorkstrongForm({});
    let updateContactInfo = new FetchUnResponsiveWorkstrongForm({});
    let updateIntialReview = new FetchUnResponsiveWorkstrongForm({});
    let updateHRMedical = new FetchUnResponsiveWorkstrongForm({});
    let updateContactAttempts = new FetchUnResponsiveWorkstrongForm({});
    let updateProgramType = new FetchUnResponsiveWorkstrongForm({});
    let updateProgramCompletion = new FetchUnResponsiveWorkstrongForm({});
    let WorkstrongCollection = new workstrongFormCollection({});
    let pageAction = new UiAction()
    const todaysDate = Cypress.moment().format('MM/DD/YYYY')

    before(() => {

        cy.fixture(unResponsiveForm).then((fetchUserData) => {
            CreateWorkstrongForm = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].navigate_page)
            CreateWorkstrongAdjuster = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].adjuster_information)
            CreateBasicInfo = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].basic_information)
            CreateRecentClaim = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].most_recent_claim)
            CreatePreviousClaim = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].previous_claim)
            CreatePriorInjuries = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].prior_injuries)
            updateContactInfo = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].contact_information)
            updateIntialReview = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].intial_review)
            updateHRMedical = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].hr_medical_clearance)
            updateContactAttempts = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].contact_attempts)
            updateProgramType = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].program_type)
            updateProgramCompletion = new FetchUnResponsiveWorkstrongForm(fetchUserData[0].program_completion)
        })

        pageAction.resetApp().then((win) => {
            win.sessionStorage.clear()
        })

    })

    beforeEach(() => {
        cy.login(BSAS_ADMIN.id);
    });


    it('navigate Create App', () => {
        global.statusCheck = "NOT_INTERESTED"
        WorkstrongCollection.navigateRss(CreateWorkstrongForm.cr_home_url);
        cy.getCookies().spread(($ele) => {
            global.fetchToken = $ele.value
        })
    });

    it('search and edit application form', () => {
        // cy.log("global.hashValue ", global.hashValue)
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

    it('Set UN-Responsive Status', () => {
        WorkstrongCollection.programCompletion(updateProgramCompletion.up_Unresponsive, updateProgramCompletion.up_dateofCompletion)
    });


    it('Wellness Submit Application', () => {
        WorkstrongCollection.WellnessSubmit(assertions.sedgwick_form.saveForm_successmsg)
    });

    /* it('On Hold && Program Completion', () => {
        // WorkstrongCollection.holdHistroyYes();
        WorkstrongCollection.programCompletion(updateProgramCompletion.up_Completed, updateProgramCompletion.up_dateofCompletion);
    }); */

});


function setToken () {
    cy.setCookie('authtoken', config.Authorization.auth);
}
