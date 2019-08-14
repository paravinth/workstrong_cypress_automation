import UiAction from '../page_actions';
import { findstatus } from '../../../fixtures/export.js';

import worksCreateFormObj from '../../../support/page_objects/po_workstrong_form_create'
import worksUpdateFormObj from '../../../support/page_objects/po_workstrong_form_update'

class workstrongFormCollection {
    pageActions = new UiAction();
    getDate = Cypress.moment().format('MM-DD-YYYY');
    abc


    navigateRss = (url) => {
        this.pageActions.doVisit(url);
        this.pageActions.getElement(worksCreateFormObj.createNewApp.create_appbtn);
    }

    navigateCreateApp = () => {
        this.pageActions.clickButton(worksCreateFormObj.createNewApp.create_appbtn);
        this.pageActions.getElement(worksCreateFormObj.createNewApp.submit_createbtn);
    }

    sedgwickAdjuster = (adjusterName) => {
        this.pageActions.listSelect(worksCreateFormObj.SedgwickBasicInformation.adjuster_name, adjusterName);
    }

    SedgwickBasicInfo = (firstName, lastName, dob, tpaDate, department, email, phoneNumber, secondaryNumber, referralType, referralDate, location) => {
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.basic_firstname, firstName);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.basic_lastname, lastName);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.dateofbirth, dob);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.tpa_receive_date, tpaDate);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.department, department);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.email, email);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.phone_number, phoneNumber);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.sec_phone_number, secondaryNumber);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickBasicInformation.referral_type, referralType);
        this.pageActions.enterText(worksCreateFormObj.SedgwickBasicInformation.referral_date, referralDate);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickBasicInformation.location, location);

    }

    SedgwickRecentClaim = (claimNo, medRecord, ICD9Code, ICD10Code, dateofInjury, injurybodyPart, injurybodySubPart, natureofInjury, injurySubType, incidentType, incidentSubType, medicalProvider, medicaldescription) => {
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_claim_no, claimNo);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_med_record_no, medRecord);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_ICD9_code, ICD9Code);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_ICD10_code, ICD10Code);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_dateofInjury, dateofInjury);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostRecentClaim.recent_dateAutoClick)
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurybodyPart, injurybodyPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurybodySubPart, injurybodySubPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_natureofInjury, natureofInjury);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurySubType, injurySubType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_incidentType, incidentType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_incidentSubType, incidentSubType);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostRecentClaim.no_released_care);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_medical_provider, medicalProvider);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostRecentClaim.recent_medical_description, medicaldescription);

    }

    SedgwickPreviousClaim = (claimNo, medRecord, ICD9Code, ICD10Code, dateofInjury, injurybodyPart, injurybodySubPart, natureofInjury, injurySubType, incidentType, incidentSubType, medicalProvider, medicaldescription) => {
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_claim_no, claimNo);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_med_record_no, medRecord);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_ICD9_code, ICD9Code);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_ICD10_code, ICD10Code);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_dateofInjury, dateofInjury);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostpreviousClaim.prev_dateAutoClick)
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurybodyPart, injurybodyPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurybodySubPart, injurybodySubPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_natureofInjury, natureofInjury);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurySubType, injurySubType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_incidentType, incidentType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_incidentSubType, incidentSubType);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostpreviousClaim.yes_released_care);
        this.pageActions.enterText(worksCreateFormObj.SedgwickMostpreviousClaim.prev_medical_description, medicaldescription);

    }

    SedgwickPriorInjuries = (priorInjuryDesc, priorInjuryDate) => {

        this.pageActions.enterText(worksCreateFormObj.priorInjury.priorInjuryDesc, priorInjuryDesc);
        this.pageActions.enterText(worksCreateFormObj.priorInjury.priorInjuryDate, priorInjuryDate);
        this.pageActions.clickButton(worksCreateFormObj.priorInjury.prior_dateAutoClick)
        this.pageActions.clickButton(worksCreateFormObj.priorInjury.priorAddButton);
    }

    SedgwickSave = (successMessage) => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.save_button);
        this.pageActions.expectSpan(worksCreateFormObj.save_submit.user_success_message, successMessage)
        this.pageActions.invokeText(worksCreateFormObj.save_submit.user_success_message);
    }

    SedgwickSubmit = (successMessage) => {
        // this.pageActions.clickButton(worksCreateFormObj.save_submit.submit_button);
        // this.pageActions.expectSpan(worksCreateFormObj.save_submit.user_success_message, successMessage)
        this.pageActions.getUserID()
        this.pageActions.getElement(worksCreateFormObj.createNewApp.submit_createbtn);
    }

    NavigateReady = () => {
        this.pageActions.clickButton(worksCreateFormObj.menu_tabs.ready_menu);
        this.pageActions.expectVisible(worksCreateFormObj.ready_status.menu_active)
        // this.pageActions.expectSpan(worksCreateFormObj.ready_status.)
    }

    searchReadyStatus = (abc) => {

        cy.log(findstatus.workstrong_app_id);
        /*    var no = this.pageActions.getUserID();
        cy.log("yes  : " + no) */
        cy.visit('https://dev.riskandsafety.com/workstrong/#/wellnessProgram/68e37473-f701-4c9f-9fcd-619fe3b51b0d/participant');
        var yes = cy.location('hash').then(function ($el) {
            var yes = $el.toString().split('/')[2]
            abc = $el.toString().split('/')[2]
            cy.log('yes  : ' + findstatus.workstrong_app_id)
            return function () {
                abc()
            }
        })
        cy.log('yes  : ' + this.abc)
        cy.visit('https://dev.riskandsafety.com/workstrong/');
        this.pageActions.clickButton(worksCreateFormObj.menu_tabs.search_menu);
        this.pageActions.enterText(worksCreateFormObj.search_area.search_field, yes)
        this.pageActions.containsClick(yes)
    }

    userContactInfo = (primaryPhone, secondaryNumber, email, notes) => {
        cy.visit('https://dev.riskandsafety.com/workstrong/#/wellnessProgram/dd2053b2-0d1c-49ff-bf95-832c50c42379/program');
        this.pageActions.enterText(worksUpdateFormObj.contactInformation.primary_phone, primaryPhone);
        this.pageActions.enterText(worksUpdateFormObj.contactInformation.secondary_phone, secondaryNumber);
        this.pageActions.enterText(worksUpdateFormObj.contactInformation.email_id, email);
        this.pageActions.enterText(worksUpdateFormObj.contactInformation.notes, notes);
    }

    userPotientialAssessment = (reviewDate) => {
        this.pageActions.enterText(worksUpdateFormObj.intial_review.initial_reviewDate, reviewDate);
        this.pageActions.clickButton(worksUpdateFormObj.intial_review.recent_dateAutoClick);
        this.pageActions.clickButton(worksUpdateFormObj.intial_review.potiential_candit_yes);
    }

    hrMedicatlClearance = (requestDate, clearedDate, medClearDate) => {
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.clearance_yes);
        this.pageActions.enterText(worksUpdateFormObj.hr_medical_clearance.request_date, requestDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);
        this.pageActions.enterText(worksUpdateFormObj.hr_medical_clearance.cleared_date, clearedDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.fitness_yes);
        this.pageActions.enterText(worksUpdateFormObj.hr_medical_clearance.med_clearedDate, medClearDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);        
    }

    contactAttempts = (contactType, contactDate, contactNotes, nextContactDate) => {
        this.pageActions.listSelect(worksUpdateFormObj.contact_attempts.contactType, contactType);
        this.pageActions.enterText(worksUpdateFormObj.contact_attempts.contactDate, contactDate);
        this.pageActions.clickButton(worksUpdateFormObj.contact_attempts.recent_dateAutoClick);
        this.pageActions.enterText(worksUpdateFormObj.contact_attempts.contactNotes, contactNotes);
        this.pageActions.containsClick(worksUpdateFormObj.contact_attempts.addContactAttempt);
        this.pageActions.enterText(worksUpdateFormObj.contact_attempts.nextContactDate, nextContactDate);
        this.pageActions.clickButton(worksUpdateFormObj.contact_attempts.recent_dateAutoClick);
    }

    programType = (enrollDate) => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.is_enrolled_yes);
        this.pageActions.enterText(worksUpdateFormObj.program_type.enrollment_date, enrollDate);
        this.pageActions.clickButton(worksUpdateFormObj.program_type.recent_dateAutoClick);
    }

    holdHistroyYes = () => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.hold_history_yes)
    }

    holdHistroyNo = () => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.hold_history_no)
    }

    programCompletion = (programStatus, completionDate) => {
        this.pageActions.listSelect(worksUpdateFormObj.program_completion.program_status, programStatus);
        this.pageActions.enterText(worksUpdateFormObj.program_completion.completion_typeDate, completionDate);
        this.pageActions.clickButton(worksUpdateFormObj.program_completion.recent_dateAutoClick);
    }

    saveWellnessForm = () => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.save_button);
    }

    submitWellnessForm = () => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.submit_button);
    }
}

export default workstrongFormCollection;