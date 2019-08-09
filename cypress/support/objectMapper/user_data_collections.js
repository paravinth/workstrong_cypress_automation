class User {
   

    constructor({ eppn, ucnet, last_name, first_name, email_id, campusCode, spoofUCUser, submitButton }) {
        this.eppn = eppn;
        this.ucnet = ucnet;
        this.last_name = last_name,
        this.first_name = first_name,
        this.email_id = email_id,
        this.campusCode = campusCode,
        this.spoofUCUser = spoofUCUser,
        this.submitButton = submitButton
    }
}

export default User;