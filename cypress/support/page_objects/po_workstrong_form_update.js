module.exports = {
    contactInformation:
    {
        'primary_phone': '#primaryPhone',
        'secondary_phone': '#secondaryPhone',
        'email_id': '#email',
        'notes': '#notes'
    },
    intial_review:
    {
        'initial_reviewDate': '#initialReviewDate',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
        'potiential_candit_yes': '[ng-model="ctrl.wellnessProgram.program.isPotentialCandidate"][value="true"]',
        'potiential_candit_no': '[ng-model="ctrl.wellnessProgram.program.isPotentialCandidate"][value="false"]',
        'reason_rejected': '#reasonRejected',
    },
    hr_medical_clearance:
    {
        'clearance_yes': '[ng-model="ctrl.wellnessProgram.program.hrClearanceType"][value="YES"]',
        'clearance_no': '[ng-model="ctrl.wellnessProgram.program.hrClearanceType"][value="NO"]',
        'clearance_pending': '[ng-model="ctrl.wellnessProgram.program.hrClearanceType"][value="PENDING"]',
        'request_date': '#hrRequestedDate',
        'cleared_date': '#hrClearedDate',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
        'fitness_yes': '[ng-model="ctrl.wellnessProgram.program.medicalClearanceType"][value="YES"]',
        'fitness_no': '[ng-model="ctrl.wellnessProgram.program.medicalClearanceType"][value="NO"]',
        'fitness_pending': '[ng-model="ctrl.wellnessProgram.program.medicalClearanceType"][value="PENDING"]',
        'med_clearedDate': '#medClearedDate'
    },
    contact_attempts:
    {
        'contactType': '#contactType',
        'contactDate': '#contactDate',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
        'contactNotes': '#contactNotes',
        'contactDate': '#contactDate',
        'addContactAttempt': 'Add',
        'nextContactDate': '#nextContactDate'

    },
    program_type:
    {
        'is_enrolled_yes': '[ng-model="ctrl.wellnessProgram.program.isParticipantEnrolled"][value="true"]',
        'is_enrolled_no': '[ng-model="ctrl.wellnessProgram.program.isParticipantEnrolled"][value="false"]',
        'enrollment_date': '#enrollmentDate',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
        'program_type_table': '#programTypeTable',
        'hold_history_yes': '[ng-model="ctrl.hold.holdStatus"][value="true"]',
        'hold_history_no': '[ng-model="ctrl.hold.holdStatus"][value="false"]',
    },
    program_completion:
    {
        'program_status': '#completionType',
        'completion_typeDate': '#completionTypeDate',
        'recent_dateAutoClick': '.btn-sm.btn-info.active',
    },
    save_submit:
    {
        'save_btn': 'button[ng-click="ctrl.save()"]',
        'submit_btn': 'button[ng-show="ctrl.enableSubmit()"]'
    }
}