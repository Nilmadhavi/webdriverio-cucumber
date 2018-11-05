const expect = require('chai').expect;
const {Given, When, Then} = require("cucumber");

Given(/^I go to the homepage$/, () => {
        browser.url("/");
});

Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
});

Given(/^I go to the loginpage/, () => {
    browser.url("/login");
});

When(/^I enter username "([^"]*)"$/, (user) => {
    browser.waitForVisible('[ng-model="user.name"]', 3000)
    browser.element('[ng-model="user.name"]').setValue(user);
});

When(/^I enter password "([^"]*)"$/, (password) => {
    browser.element('[ng-model="user.password"]').setValue(password);
});

When(/^I click on submit button$/, () => {
    browser.click('<button>');
    browser.pause(2000);
});


Then("I go to employees page", () => {
    browser.pause(2000);
    expect(browser.getUrl()).to.be.eq("http://cafetownsend-angular-rails.herokuapp.com/employees");
});

Then("I logout", () => {
    browser.pause(2000);
    browser.element("[ng-click='logout()']");
});

Then(/^I click  on create button$/, () => {
    browser.click('=Create');
    browser.pause(2000);
    expect(browser.getUrl()).to.be.eq("http://cafetownsend-angular-rails.herokuapp.com/employees/new");
});

When(/^I enter username firstname "([^"]*)"$/, (fname) => {
    browser.element('[ng-model="selectedEmployee.firstName"]').setValue(fname);
});

When(/^I enter username lastname "([^"]*)"$/, (lname) => {
    browser.element('[ng-model="selectedEmployee.lastName"]').setValue(lname);
});

When(/^I enter start date "([^"]*)"$/, (date) => {
    browser.element('[ng-model="selectedEmployee.startDate"]').setValue(date);
});

When(/^I enter email id "([^"]*)"$/, (date) => {
    browser.element('[ng-model="selectedEmployee.email"]').setValue(date);
});

When(/^I click on add button$/, () => {
    browser.click('button=Add');
    browser.pause(2000);
});

When(/^I select the employee "([^"]*)"$/, (employee) => {
    browser.pause(2000);
    browser.click('li='+employee);
});

When(/^I click on edit button$/, () => {
    browser.click('a=Edit');
    browser.pause(2000);
    const a = browser.getText('button=Update');
    expect(a).to.be.eq('Update');
});

When(/^I edit email id to "([^"]*)"$/, (emailedited) => {
    browser.element('[ng-model="selectedEmployee.email"]').setValue(emailedited);
    browser.pause(2000);
});

When(/^I click on update button$/, () => {
    browser.click('button=Update');
    browser.pause(2000);
});

When(/^I click on delete button$/, () => {
    browser.click('a=Delete');
    browser.pause(2000);
    browser.alertAccept();
});

When(/^I edit firstname to "([^"]*)"$/, (firstname) => {
    browser.element('[ng-model="selectedEmployee.firstName"]').setValue(firstname);
    browser.pause(2000);
});


Then(/^I verify new employee is created "([^"]*)"$/, (newemployee) => {
    const empName = browser.getText('li='+newemployee);
    expect(empName).to.be.eq(newemployee);
});

Then(/^I should expect error message on login screen$/, () => {
    const errorMessageActual = browser.getText("[ng-show='showMessage()']");
    const errorMessageExpected = 'Invalid username or password!';
    expect(errorMessageExpected).to.be.eq(errorMessageActual);
});

Then(/^I am logged in$/, () => {
    browser.url("/login");
    browser.waitForVisible('[ng-model="user.name"]', 5000)
    browser.element('[ng-model="user.name"]').setValue('Luke');
    browser.element('[ng-model="user.password"]').setValue('Skywalker');
    browser.click('<button>');
    browser.pause(2000);
});

Then(/^The employee is already existing "([^"]*)"$/, (employee) => {

    console.log(employee);
    const a = employee.split(' ');
    console.log(a[0]);
    console.log(a[1]);
    browser.click('=Create');
    browser.pause(2000);
    browser.element('[ng-model="selectedEmployee.firstName"]').setValue(a[0]);
    browser.element('[ng-model="selectedEmployee.lastName"]').setValue(a[1]);
    browser.element('[ng-model="selectedEmployee.startDate"]').setValue('2018-10-10');
    browser.element('[ng-model="selectedEmployee.email"]').setValue('helloworld@gmail.com');
    browser.click('button=Add');
    browser.pause(2000);
});

Then(/^I verify the edit is successfull$/, () => {
    const editEmailExpected = 'helloworld123@gmail.com';
    const editEmailActual = browser.getValue('[ng-model="selectedEmployee.email"]');
    expect(editEmailExpected).to.be.eq(editEmailActual);
});

Then(/^I should expect error alert box$/, () => {
    browser.pause(1000);
    const alertTextActual = browser.alertText();
    const alertTextexpected = 'Error trying to create a new employee: {"start_date":["can\'t be blank"]})';
    expect(alertTextexpected).to.be.eq(alertTextActual);
    console.log(alertTextActual);
    browser.alertAccept();
    browser.pause(2000);
});

Then(/^I should expect error message$/, () => {
    browser.waitForVisible('.ng-invalid-required', 5000);
});

Then(/^"([^"]*)" should not be on employee list$/, (employee) => {
    browser.pause(2000);
    browser.refresh();
    browser.pause(2000);
    browser.element('[ng-model="user.name"]').setValue('Luke');
    browser.element('[ng-model="user.password"]').setValue('Skywalker');
    browser.click('<button>');
    browser.pause(2000);
    expect(browser.isExisting('li='+employee)).to.be.eq(false);
});

When(/^I go to employees list page$/, () => {
    browser.url("/login");
    browser.waitForVisible('[ng-model="user.name"]', 5000)
    browser.element('[ng-model="user.name"]').setValue('Luke');
    browser.element('[ng-model="user.password"]').setValue('Skywalker');
    browser.click('<button>');
    browser.pause(2000);
});