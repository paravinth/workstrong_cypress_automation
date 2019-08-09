
class UiAction {
    doVisit (url) {
        cy.visit(url);
    }


    enterText (selector, txt) {
        let a = cy.get(selector)
        a.type(txt)
    }

    fastText (selector, txt) {
        cy.get(selector).invoke('textarea').type(txt)
    }

    getElement (selector) {
        cy.get(selector)
    }

    waitForText (text) {
        cy.contains(text)
    }

    EnterTextClear (selector, text, text2, count) {
        if (count == 2) {
            cy.get(selector).clear()
            let b = cy.get(selector)
            b.type('{end}').type(text).type(text2)
        } else {
            cy.get(selector).clear()
            let b = cy.get(selector)
            b.type(text)
        }

    }

    clickButton (selector) {
        let a = cy.get(selector)
        a.click();
    }

    multipleClick (selector) {
        let a = cy.get(selector)
        a.eq(0).click()
    }

    clickCheckBox (selector) {
        cy.get(selector)// Passes
            .check({ force: true }).should('be.checked')
    }

    listSelect (select, selectdata) {
        let list = cy.get(select)
        list.select(selectdata); / .should(have.value, asset) /
    }

    radioButton (selector, index) {
        cy.get(selector).eq(index).click()
    }
    wait (time) {
        cy.wait(time)
    }

    containsClick (selector) {
        cy.contains(selector).click()
    }

    nextuntils (selector, waitforelement) {
        let waituntil = cy.get(selector)
        waituntil.nextUntil(waitforelement)
    }

    prevuntils (selector, waitforelement) {
        let waituntil = cy.get(selector)
        waituntil.prevUntil(waitforelement)
    }

    nextuntil (selector) {
        cy.nextUntil(selector)
    }

    contains (selector, userdata) {
        let contains = cy.contains(selector, userdata)
        contains.click()
    }

    shouldcontain (selector, userdata) {
        let sContain = cy.get(selector)
        sContain.should('contain', userdata);
    }

    resetApp () {
        return cy.window()
    }

    invokeText (selector) {
        return new Cypress.Promise((resolve, reject) => {
            cy.get(selector).invoke('text').then((capturetxt) => {
                cy.log("checking   -----", capturetxt)
                resolve(capturetxt)
            })
        })
    }

    verifyGridData (rowid, tickicon) {
        let innerText = {};
        return new Cypress.Promise((resolve, reject) => {
            cy
                .get(rowid)
                .each((el, index, $list) => {
                    cy.log(el);
                    cy.log(el);
                    cy.log(JSON.stringify(el))
                    cy.log(JSON.stringify(el.children))
                    cy.log("index" + index);
                    innerText[index] = []
                    cy.log($list);
                    cy.log(el.children.length)

                    for (let i = 0; i < el.length; i++) {
                        cy.log("Executing for loop --> " + i)
                        cy.log("Children Length " + el[i].children.length)
                        for (let j = 0; j < el[i].children.length; j++) {
                            cy.log(el[i].children[j].innerText)

                            if (el[i].children[j].innerHTML.indexOf(tickicon) >= 0) {
                                cy.log("Tick exists at " + j)
                                innerText[index].push("TICK_ICON")
                            } else {
                                innerText[index].push(el[i].children[j].innerText)
                            }
                        }

                    }

                }).then((l) => {
                    resolve(innerText);
                })
        });
    }

    todayDate () {
        Cypress.moment().format('DD-MM-YYYY');

    }

    date () {
        return new Cypress.Promise((resolve, reject) => {
            var now = new Date();
            var day = ("0" + now.getDate()).slice(-2);
            var month = ("0" + (now.getMonth() + 1)).slice(-2);
            var today = (month) + "/" + (day) + "/" + now.getFullYear();
            cy.log(today)
            resolve(today)
        })
    }


}
export default UiAction;
