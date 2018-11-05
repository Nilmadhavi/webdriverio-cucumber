Feature: Edit employee check

  Scenario: To edit an employee
    Given I am logged in
    When The employee is already existing "Edit Employee"
    When I select the employee "Edit Employee"
    When I click on edit button
    When I edit email id to "helloworld123@gmail.com"
    When I click on update button
    When I select the employee "Edit Employee"
    When I click on edit button
    Then I verify the edit is successfull

  Scenario: To change employee name to blank
    Given I am logged in
    When I select the employee "Edit Employee"
    When I click on edit button
    When I edit firstname to ""
    When I click on update button
    Then I should expect error message

  Scenario: Cleanup data
    Given I am logged in
    When I select the employee "Edit Employee"
    Then I click on delete button