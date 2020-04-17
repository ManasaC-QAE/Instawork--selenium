
Feature: Login Profile
    @id1
    Scenario: Verify Instawork company is displayed first on the search page for the given keyword
        Given I am on Google Search Page
        When  I search Instawork Company
        Then  I verify Instawork company website is displayed first on the page

    @id2
    Scenario Outline: Verify Instawork company is displayed first on the search page for the given keyword
        Given I am on Google Search Page
        When  I search <keyword>
        Then  I find the position of website for <keyword> on the list
        Examples:
        |      keyword       |
        |      Instawork     |
        |Instawork bangalore |
        |  Instawork gigs    |
        |  Instawork Reviews |
        |Instawork app reviews|
