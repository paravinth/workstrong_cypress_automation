/// <reference types="Cypress" />
/// <reference path="../support/index.js" />

var createForm = 'create_workstrong_app.json'
var upDateForm = 'update_workstrong_app.json'
import * as config from '../support/config'
import { findstatus } from '../fixtures/export.js';
import * as assertions from '../fixtures/assertions';
import FetchUpdateWorkstrongForm from '../support/objectMapper/update_workstrong_map';

import workstrongFormCollection from '../plugins/common/function_collectors/collection_workstrong_from';
import FetchCreateWorkstrongForm from '../support/objectMapper/create_workstrong_map';

describe('Enrolled Workstrong assessment Form', () => {
    let CreateWorkstrongForm = new FetchCreateWorkstrongForm({});
    let CreateWorkstrongAdjuster = new FetchCreateWorkstrongForm({});
    let CreateBasicInfo = new FetchCreateWorkstrongForm({});
    let CreateRecentClaim = new FetchCreateWorkstrongForm({});
    let CreatePreviousClaim = new FetchCreateWorkstrongForm({});
    let CreatePriorInjuries = new FetchCreateWorkstrongForm({});
    let updateContactInfo = new FetchUpdateWorkstrongForm({});
    let updateIntialReview = new FetchUpdateWorkstrongForm({});
    let updateHRMedical = new FetchUpdateWorkstrongForm({});
    let updateContactAttempts = new FetchUpdateWorkstrongForm({});
    let updateProgramType = new FetchUpdateWorkstrongForm({});
    let updateProgramCompletion = new FetchUpdateWorkstrongForm({});
    let WorkstrongCollection = new workstrongFormCollection({});
    const todaysDate = Cypress.moment().format('MM/DD/YYYY')

    before(() => {
        cy.fixture(createForm).then((fetchUserData) => {
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
        })

        // setToken();
    })



    it('navigate Create App', () => {
        setToken();
        WorkstrongCollection.navigateRss(CreateWorkstrongForm.cr_home_url)
    });

    it('search and edit application form', () => {
        cy.log("global.hashValue ", global.hashValue)
        var fetchHashValue = global.hashValue
        setToken();
        WorkstrongCollection.searchReadyStatus(fetchHashValue)
    });

    it('Adjuster Information', () => {
        setToken();
        WorkstrongCollection.sedgwickAdjuster(CreateWorkstrongAdjuster.adjuster_name)
    });

    it('Basic Information', () => {
        setToken();
        WorkstrongCollection.SedgwickBasicInfo(CreateBasicInfo.client_firstname, CreateBasicInfo.client_lastname, CreateBasicInfo.client_dob, CreateBasicInfo.tpa_received_date, CreateBasicInfo.basic_department, CreateBasicInfo.basic_email, CreateBasicInfo.basic_phone_number, CreateBasicInfo.basic_secondary_phone_number, CreateBasicInfo.basic_referral_type, CreateBasicInfo.basic_referral_date, CreateBasicInfo.basic_location)
    });

    it('Most Recent Claim', () => {
        setToken();
        WorkstrongCollection.SedgwickRecentClaim(CreateRecentClaim.recent_claim_number, CreateRecentClaim.recent_medical_record_no, CreateRecentClaim.recent_icd9_code, CreateRecentClaim.recent_icd10_code, CreateRecentClaim.recent_date_ofinjury, CreateRecentClaim.recent_injury_bodyPart, CreateRecentClaim.recent_injury_sub_bodyPart, CreateRecentClaim.recent_nature_ofinjury, CreateRecentClaim.recent_nature_sub_ofinjury, CreateRecentClaim.recent_incident_type, CreateRecentClaim.recent_incident_sub_type, CreateRecentClaim.recent_medical_provider, CreateRecentClaim.recent_legacy_data)
    });

    it('Previous Claim', () => {
        setToken();
        WorkstrongCollection.SedgwickPreviousClaim(CreatePreviousClaim.previous_claim_number, CreatePreviousClaim.previous_medical_record_no, CreatePreviousClaim.previous_icd9_code, CreatePreviousClaim.previous_icd10_code, CreatePreviousClaim.previous_date_ofinjury, CreatePreviousClaim.previous_injury_bodyPart, CreatePreviousClaim.previous_injury_sub_bodyPart, CreatePreviousClaim.previous_nature_ofinjury, CreatePreviousClaim.previous_nature_sub_ofinjury, CreatePreviousClaim.previous_incident_type, CreatePreviousClaim.previous_incident_sub_type, CreatePreviousClaim.previous_medical_provider, CreatePreviousClaim.previous_legacy_data)
    });

    it('Prior Injuries', () => {
        setToken();
        WorkstrongCollection.SedgwickPriorInjuries(CreatePriorInjuries.prior_injuries_list, CreatePriorInjuries.prior_injuries_date)
    })

    it('Save Form', () => {
        setToken();
        WorkstrongCollection.SedgwickSave(assertions.sedgwick_form.saveForm_successmsg)
    })


    it('Navigate to Next page of the form', () => {
        setToken();
        WorkstrongCollection.NextpageNavigate()
    });

    it('Contact Information', () => {
        setToken();
        WorkstrongCollection.userContactInfo(updateContactInfo.up_primary_contact, updateContactInfo.up_secondary_contact, updateContactInfo.up_email, updateContactInfo.up_notes)
    });

    it('Initial Review', () => {
        setToken();
        WorkstrongCollection.userPotientialAssessment(updateIntialReview.up_review_date)
    });

    it('HR/Risk Manager & Medical Clearance', () => {
        setToken();
        WorkstrongCollection.hrMedicatlClearance(updateHRMedical.up_hr_request_date, updateHRMedical.up_hr_cleared_date, updateHRMedical.up_med_cleared_date);
    });

    it('Contact Attempts', () => {
        setToken();
        WorkstrongCollection.contactAttempts(updateContactAttempts.up_contact_type, updateContactAttempts.up_contact_date, updateContactAttempts.up_contact_note, updateContactAttempts.up_next_contact_date);
    });

    it('Program Type', () => {
        setToken();
        WorkstrongCollection.programTypeEnrolled(updateProgramType.up_enroll_date);
    });


    it('Wellness Submit Application', () => {
        setToken();
        WorkstrongCollection.WellnessSubmit(assertions.sedgwick_form.saveForm_successmsg)
    });

    /* it('On Hold && Program Completion', () => {
        setToken();
        // WorkstrongCollection.holdHistroyYes();
        WorkstrongCollection.programCompletion(updateProgramCompletion.up_Completed, updateProgramCompletion.up_dateofCompletion);
    }); */

});


function setToken () {
    cy.setCookie('authtoken', config.Authorization.auth);
}
