Feature: Create employee check

  Scenario: To create a new employee
    Given I am logged in
    Then I click  on create button
    When I enter username firstname "Create"
    When I enter username lastname "Employee"
    When I enter start date "2018-10-10"
    When I enter email id "helloworld@gmail.com"
    When I click on add button
    Then I verify new employee is created "Create Employee"

  Scenario: To create a new employee with wrong start date
    Given I am logged in
    Then I click  on create button
    When I enter username firstname "Create"
    When I enter username lastname "Employee"
    When I enter start date "2018-10-"
    When I enter email id "helloworld@gmail.com"
    When I click on add button
    Then I should expect error alert box
    Then I logout

  Scenario: Cleanup data
    Given I am logged in
    When I select the employee "Create Employee"
    Then I click on delete button