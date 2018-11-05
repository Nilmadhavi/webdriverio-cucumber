Feature: Delete employee check, Should be able to delete an employee

  Scenario: To delete an employee
    Given I am logged in
    When The employee is already existing "sony mony"
    When I select the employee "sony mony"
    When I click on delete button
    Then "sony mony" should not be on employee list