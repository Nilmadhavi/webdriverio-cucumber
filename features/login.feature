Feature: Login check, I should be able to login to the website

  Scenario: To verify login
    Given I go to the loginpage
    Then I expect the title of the page "CafeTownsend-AngularJS-Rails"
    When I enter username "Luke"
    When I enter password "Skywalker"
    When I click on submit button
    Then I go to employees page
    Then I logout

  Scenario: To verify login with wrong username
    Given I go to the loginpage
    When I enter username "wrongusername"
    When I enter password "Skywalker"
    When I click on submit button
    Then I should expect error message on login screen

  Scenario: To verify login with wrong password
    Given I go to the loginpage
    When I enter username "Luke"
    When I enter password "wrongpassword"
    When I click on submit button
    Then I should expect error message on login screen

