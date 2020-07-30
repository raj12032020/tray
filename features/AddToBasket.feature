Feature: Add items to basket

  Scenario Outline: As a user, I can log in and add items to basket

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the products page
    When I sort products listing by Price (high to low)
    And am able to add 2 cheapest items
    Then the basket icon shows count 2
    When I go to basket page
    Then I should see the basket page
    And I can remove the cheapest item
    Then the basket icon shows count 1
    When I go to checkout
    Then I should see the checkout page


    Examples:
      | username      | password             | 
      | standard_user | secret_sauce         | 
      
