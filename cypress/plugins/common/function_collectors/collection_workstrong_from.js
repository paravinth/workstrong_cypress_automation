import UiAction from '../page_actions';
import { findstatus } from '../../../fixtures/export.js';
import getcommand from '../../../support/commands'
import worksCreateFormObj from '../../../support/page_objects/po_workstrong_form_create'
import worksUpdateFormObj from '../../../support/page_objects/po_workstrong_form_update'
import { get } from 'http';

class workstrongFormCollection {
    pageActions = new UiAction();
    getDate = Cypress.moment().format('MM-DD-YYYY');
    abc
    hashValue = "";
    exportHashValue

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
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.basic_firstname, firstName);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.basic_lastname, lastName);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.dateofbirth, dob);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.tpa_receive_date, tpaDate);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.department, department);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.email, email);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.phone_number, phoneNumber);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.sec_phone_number, secondaryNumber);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickBasicInformation.referral_type, referralType);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickBasicInformation.referral_date, referralDate);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickBasicInformation.location, location);

    }

    SedgwickRecentClaim = (claimNo, medRecord, ICD9Code, ICD10Code, dateofInjury, injurybodyPart, injurybodySubPart, natureofInjury, injurySubType, incidentType, incidentSubType, medicalProvider, medicaldescription) => {
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_claim_no, claimNo);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_med_record_no, medRecord);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_ICD9_code, ICD9Code);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_ICD10_code, ICD10Code);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_dateofInjury, dateofInjury);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostRecentClaim.recent_dateAutoClick)
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurybodyPart, injurybodyPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurybodySubPart, injurybodySubPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_natureofInjury, natureofInjury);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_injurySubType, injurySubType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_incidentType, incidentType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostRecentClaim.recent_incidentSubType, incidentSubType);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostRecentClaim.no_released_care);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_medical_provider, medicalProvider);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostRecentClaim.recent_medical_description, medicaldescription);

    }

    SedgwickPreviousClaim = (claimNo, medRecord, ICD9Code, ICD10Code, dateofInjury, injurybodyPart, injurybodySubPart, natureofInjury, injurySubType, incidentType, incidentSubType, medicalProvider, medicaldescription) => {
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_claim_no, claimNo);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_med_record_no, medRecord);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_ICD9_code, ICD9Code);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_ICD10_code, ICD10Code);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_dateofInjury, dateofInjury);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostpreviousClaim.prev_dateAutoClick)
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurybodyPart, injurybodyPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurybodySubPart, injurybodySubPart);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_natureofInjury, natureofInjury);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_injurySubType, injurySubType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_incidentType, incidentType);
        this.pageActions.listSelect(worksCreateFormObj.SedgwickMostpreviousClaim.prev_incidentSubType, incidentSubType);
        this.pageActions.clickButton(worksCreateFormObj.SedgwickMostpreviousClaim.yes_released_care);
        this.pageActions.EnterTextClear(worksCreateFormObj.SedgwickMostpreviousClaim.prev_medical_description, medicaldescription);

    }

    SedgwickPriorInjuries = (priorInjuryDesc, priorInjuryDate) => {

        this.pageActions.EnterTextClear(worksCreateFormObj.priorInjury.priorInjuryDesc, priorInjuryDesc);
        this.pageActions.EnterTextClear(worksCreateFormObj.priorInjury.priorInjuryDate, priorInjuryDate);
        this.pageActions.clickButton(worksCreateFormObj.priorInjury.prior_dateAutoClick)
        this.pageActions.clickButton(worksCreateFormObj.priorInjury.priorAddButton);
    }

    SedgwickSave = (successMessage) => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.save_button);
        this.pageActions.expectSpan(worksCreateFormObj.save_submit.user_success_message, successMessage)
        this.pageActions.invokeText(worksCreateFormObj.save_submit.user_success_message);

        /**********************GET HASH VALUE**********************/
        /*   cy.location().should(($loc) => {
              expect(loc.href).to.include('?saveSuccess=true')
              $loc.should('contains', '?saveSuccess=true')
          })
              */
        cy.wait(2000)

        var getHashValue
        var that = this.pageActions;
        cy.location('hash').then(function ($el) {
            getHashValue = $el.toString().split('/')[2]
            global.hashValue = getHashValue;
            cy.log("Found Hash value :  ", global.hashValue);
        })
        /**********************END GET HASH VALUE**********************/

    }

    SedgwickSubmit = (successMessage) => {
        // this.pageActions.clickButton(worksCreateFormObj.save_submit.submit_button);
        // this.pageActions.expectSpan(worksCreateFormObj.save_submit.user_success_message, successMessage)
        this.pageActions.getElement(worksCreateFormObj.createNewApp.submit_createbtn);
        this.pageActions.clickButton(worksCreateFormObj.createNewApp.submit_createbtn);
    }

    WellnessSubmit = (successMessage) => {
        // this.pageActions.clickButton(worksCreateFormObj.save_submit.submit_button);
        // this.pageActions.expectSpan(worksCreateFormObj.save_submit.user_success_message, successMessage)
        this.pageActions.getElement(worksCreateFormObj.wellness_submit_save.save);
        this.pageActions.clickButton(worksCreateFormObj.wellness_submit_save.save);
        this.pageActions.getElement(worksCreateFormObj.wellness_submit_save.submit);
        this.pageActions.clickButton(worksCreateFormObj.wellness_submit_save.submit);
        // this.pageActions.getElement(worksCreateFormObj.createNewApp.create_appbtn);
    }

    NavigateReady = () => {
        this.pageActions.clickButton(worksCreateFormObj.menu_tabs.ready_menu);
        this.pageActions.expectVisible(worksCreateFormObj.ready_status.menu_active);
        // this.pageActions.expectSpan(worksCreateFormObj.ready_status.)
    }

    searchReadyStatus = (hashcode, getStatusCheck) => {
        cy.log("hashcode ", hashcode)
        this.pageActions.clickButton(worksCreateFormObj.menu_tabs.search_menu);
        // cy.log("test innner ", worksCreateFormObj.menu_tabs.search_menu.innerHTML);
        // this.pageActions.EnterTextClear(worksCreateFormObj.search_area.search_field, hashcode)
        cy.get(worksCreateFormObj.search_area.search_field).type(hashcode).then(function (done) {
            cy.wait(2000)
            cy.get('table.custom-table [total-items="ctrl.totalCount"] .ng-binding.ng-scope').contains(getStatusCheck).as('Status')
            if ('@Status') {
                cy.log("Expected Status")
            } else {
                cy.log("Wrong Status Found")
            }
            cy.get('[pagination-id="ctrl.activeTab"] .glyphicon.glyphicon-eye-open').eq(0).click()
            return
        })
    }


    /* searchReadyStatus = () => {
        // cy.log("Initial", this.hashValue);
        // var getHashValue = "";
        var getHashValue
        cy.visit('https://dev.riskandsafety.com/workstrong/#/wellnessProgram/ff364db7-a1c8-40a6-ae60-1bdc965adec3/participant');
        var that = this.pageActions;
        cy.location('hash').then(function ($el) {
            getHashValue = $el.toString().split('/')[2]
            cy.log("inside one:  ", getHashValue);
            callExact(getHashValue, that);
            // this.hashValue = callExact(getHashValue, that);
            // console.log("Return", this.hashValue);

        })
        function callExact (getHashValue, that) {

            cy.log("outside one:  ", getHashValue);
            cy.visit('https://dev.riskandsafety.com/workstrong/');
            that.clickButton(worksCreateFormObj.menu_tabs.search_menu);
            that.EnterTextClear(worksCreateFormObj.search_area.search_field, getHashValue)
            cy.wait(5000)
            that.containsClick(getHashValue)
            global.hashValue = getHashValue;
            // cy.log("Assignment", hashValue);
            // return getHashValue;
        }

    } */

    userContactInfo = (primaryPhone, secondaryNumber, email, notes) => {
        this.pageActions.EnterTextClear(worksUpdateFormObj.contactInformation.primary_phone, primaryPhone);
        this.pageActions.EnterTextClear(worksUpdateFormObj.contactInformation.secondary_phone, secondaryNumber);
        this.pageActions.EnterTextClear(worksUpdateFormObj.contactInformation.email_id, email);
        this.pageActions.enterText(worksUpdateFormObj.contactInformation.notes, notes);
    }

    userPotientialAssessment = (reviewDate) => {
        this.pageActions.EnterTextClear(worksUpdateFormObj.intial_review.initial_reviewDate, reviewDate);
        this.pageActions.clickButton(worksUpdateFormObj.intial_review.recent_dateAutoClick);
        this.pageActions.clickButton(worksUpdateFormObj.intial_review.potiential_candit_yes);
    }

    hrMedicatlClearance = (requestDate, clearedDate, medClearDate) => {
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.clearance_yes);
        this.pageActions.EnterTextClear(worksUpdateFormObj.hr_medical_clearance.request_date, requestDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);
        this.pageActions.EnterTextClear(worksUpdateFormObj.hr_medical_clearance.cleared_date, clearedDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.fitness_yes);
        this.pageActions.EnterTextClear(worksUpdateFormObj.hr_medical_clearance.med_clearedDate, medClearDate);
        this.pageActions.clickButton(worksUpdateFormObj.hr_medical_clearance.recent_dateAutoClick);
    }

    contactAttempts = (contactType, contactDate, contactNotes, nextContactDate) => {
        this.pageActions.listSelect(worksUpdateFormObj.contact_attempts.contactType, contactType);
        this.pageActions.EnterTextClear(worksUpdateFormObj.contact_attempts.contactDate, contactDate);
        this.pageActions.clickButton(worksUpdateFormObj.contact_attempts.recent_dateAutoClick);
        this.pageActions.EnterTextClear(worksUpdateFormObj.contact_attempts.contactNotes, contactNotes);
        this.pageActions.containsClick(worksUpdateFormObj.contact_attempts.addContactAttempt);
        this.pageActions.EnterTextClear(worksUpdateFormObj.contact_attempts.nextContactDate, nextContactDate);
        this.pageActions.clickButton(worksUpdateFormObj.contact_attempts.recent_dateAutoClick);
    }

    programTypeEnrolled = (enrollDate) => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.is_enrolled_yes);
        this.pageActions.EnterTextClear(worksUpdateFormObj.program_type.enrollment_date, enrollDate);
        this.pageActions.clickButton(worksUpdateFormObj.program_type.recent_dateAutoClick);
    }

    holdHistroyYes = (startDate, endDate, reasonType) => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.hold_history_yes);
        this.pageActions.enterText(worksUpdateFormObj.oh_hold.onHold_startDate, startDate);
        this.pageActions.clickButton(worksUpdateFormObj.oh_hold.recent_dateAutoClick);
        this.pageActions.enterText(worksUpdateFormObj.oh_hold.onHold_endDate, endDate);
        this.pageActions.clickButton(worksUpdateFormObj.oh_hold.recent_dateAutoClick);
        this.pageActions.listSelect(worksUpdateFormObj.oh_hold.reason_type, reasonType);
        this.pageActions.clickButton(worksUpdateFormObj.oh_hold.add_button);

    }

    holdHistroyNo = () => {
        this.pageActions.clickButton(worksUpdateFormObj.program_type.hold_history_no)
    }

    programCompletion = (programStatus, completionDate, terminatedReason) => {
        this.pageActions.listSelect(worksUpdateFormObj.program_completion.program_status, programStatus);
        this.pageActions.EnterTextClear(worksUpdateFormObj.program_completion.completion_typeDate, completionDate);
        this.pageActions.clickButton(worksUpdateFormObj.program_completion.recent_dateAutoClick);
        if (terminatedReason) {
            this.pageActions.listSelect(worksUpdateFormObj.program_completion.terminated_reason, terminatedReason);
        }
    }

    saveWellnessForm = () => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.save_button);
    }

    submitWellnessForm = () => {
        this.pageActions.clickButton(worksCreateFormObj.save_submit.submit_button);
    }

    submitAloneForm = () => {
        this.pageActions.clickButton(worksCreateFormObj.wellness_submit_save.save);
    }

    NextpageNavigate = () => {
        this.pageActions.clickButton(worksUpdateFormObj.save_submit.next_button);
        this.pageActions.waitForText(worksUpdateFormObj.save_submit.previous_wait);
    }
}


export default workstrongFormCollection;