module.exports = {
    signin:
    {
        'rs_solutions_email': '#email',
        'rss_signin': '#next'
    },
    createNewApp:
    {
        'create_appbtn': '.button-create',
        'submit_createbtn': '#SubmitParticipant'
    },
    SedgwickBasicInformation:
    {
        'adjuster_name': '#adjusterName',
        'basic_firstname': '#basicInfoFirstName',
        'basic_lastname': '#basicInfoLastName',
        'dateofbirth': '#basicInfoDateOfBirth',
        'tpa_receive_date': '#basicInfoTpaReceiveDate',
        'department': '#basicInfoDepartment',
        'email': '#basicInfoEmail',
        'phone_number': '#basicInfoPhoneNumber',
        'sec_phone_number': '#basicInfoSecondaryPhoneNumber',
        'referral_type': '#basicInfoReferralType',
        'referral_date': '#basicInfoDate',
        'location': '#basicInfoLocation',

    },
    SedgwickMostRecentClaim:
    {
        'recent_claim_no': '#recentClaim_claimNumber',
        'recent_med_record_no': '#recentClaim_medicalRecordNumber',
        'recent_ICD9_code': '#recentClaim_icd9Code',
        'recent_ICD10_code': '#recentClaim_icd10Code',
        'recent_dateofInjury': '#recentClaim_dateOfInjury',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
        'recent_injurybodyPart': '#recentClaim_bodyPartType',
        'recent_injurybodySubPart': '#recentClaim_bodyPartSubType',
        'recent_natureofInjury': '#recentClaim_injuryType',
        'recent_injurySubType': '#recentClaim_injurySubType',
        'recent_incidentType': '#recentClaim_incidentType',
        'recent_incidentSubType': '#recentClaim_incidentSubType',
        'no_released_care': 'input#recentClaim_releasedNo',
        'recent_medical_provider': '#recentClaim_medicalProvider',
        'recent_medical_description': '#recentClaim_providerDesc',
    },
    SedgwickMostpreviousClaim:
    {
        'prev_claim_no': '#previousClaim_claimNumber',
        'prev_med_record_no': '#previousClaim_medicalRecordNumber',
        'prev_ICD9_code': '#previousClaim_icd9Code',
        'prev_ICD10_code': '#previousClaim_icd10Code',
        'prev_dateofInjury': '#previousClaim_dateOfInjury',
        'prev_dateAutoClick': '.btn-sm.btn-info.active',
        'prev_injurybodyPart': '#previousClaim_bodyPartType',
        'prev_injurybodySubPart': '#previousClaim_bodyPartSubType',
        'prev_natureofInjury': '#previousClaim_injuryType',
        'prev_injurySubType': '#previousClaim_injurySubType',
        'prev_incidentType': '#previousClaim_incidentType',
        'prev_incidentSubType': '#previousClaim_incidentSubType',
        'yes_released_care': 'input#previousClaim_releasedYes',
        'prev_medical_provider': '#recentClaim_medicalProvider',
        'prev_medical_description': '#previousClaim_providerDesc',
    },
    priorInjury:
    {
        'priorInjuryDesc': '#priorInjuryDesc',
        'priorInjuryDate': '#priorInjuryDate',
        'priorAddButton': '#addPriorInjury',
        'prior_dateAutoClick': '.btn-sm.btn-info.active',

    },
    save_submit:
    {
        'save_button': '#SaveParticipant',
        'submit_button': '#SubmitParticipant',
        'success_message': '.help-block',
        'user_success_message': '#ParticipantSavedMessage'
    },
    menu_tabs:
    {
        'draft_menu': '[heading="Draft"] a',
        'ready_menu': '[heading="Ready"] a',
        'inprocess_menu': '[heading="In Process"] a',
        'enrolled_menu': '[heading="Enrolled"] a',
        'onHold_menu': '[heading="On Hold"] a',
        'completed_menu': '[heading="Completed"] a',
        'terminated_menu': '[heading="Terminated"] a',
        'seperated_menu': '[heading="Separated from UC"] a',
        'unresp_menu': '[heading="Unresponsive"] a',
        'notIntrested_menu': '[heading="Not Interested"] a',
        'denied_menu': '[heading="Claim Denied"] a',
        'search_menu': '[active="ctrl.isSearchActive"] a',

    },
    'search_area': {
        'search_field': '#search'
    },
    'ready_status': {
        'menu_active': '.tab-pane.ng-scope.active'
    }
}