import UiAction from '../page_actions';
import riskFormObj from '../../../support/page_objects/po_workstrong_form_create'

class workstrongFormCollection {
    pageActions = new UiAction();

    getDate = Cypress.moment().format('MM-DD-YYYY'
    );

    navigateRss = (url) => {
        this.pageActions.doVisit(url);
        this.pageActions.getElement(riskFormObj.createNewApp.create_appbtn)
    }

    navigateCreateApp = () => {
        this.pageActions.clickButton(riskFormObj.createNewApp.create_appbtn);
        this.pageActions.getElement(riskFormObj.createNewApp.submit_createbtn);
    }

}

export default workstrongFormCollection;