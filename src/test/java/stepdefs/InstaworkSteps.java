package stepdefs;

import constants.InstaworkConstants;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.InstaworkPage;
import org.testng.Assert;


public class InstaworkSteps {

    InstaworkPage oInstaPage = new InstaworkPage();
    InstaworkConstants oConstants = new InstaworkConstants();

    @Given("^I am on Google Search Page")
    public void i_am_on_google_search_page() throws Throwable {
        oInstaPage.goToGoogle();

    }

    @Then("^I verify Instawork company website is displayed first on the page$")
    public void iVerifyInstaworkCompanyWebsiteIsDisplayedFirstOnThePage() {
        oInstaPage.getFirstResult();
        String actualAttribute = oInstaPage.getSearchResultList().get(0).getAttribute("href");
        System.out.println("The website listed in first position is %s " + actualAttribute);

        // Compare the resultant attribute with the expected attribute
        Assert.assertEquals(actualAttribute,oConstants.instworkRefAttribute);

        oInstaPage.launchInstaworkWebsite();
        // Verify the Instawork website is launched
        String actualURL = oInstaPage.getCurrentWebsiteURL();
        System.out.println("The URL of the current page displayed is %s " +actualURL);

        Assert.assertEquals(actualURL,oConstants.instworkRefAttribute);
        System.out.println("On INSTWORK WEBSITE!!");
    }

    @When("^I search (.*?)$")
    public void iSearchForKeyword(String keyword) {
         oInstaPage.SearchInstawork(keyword);
    }

    @Then("^I find the position of website for (.*?) on the list$")
    public void iFindThePositionOfWebsiteApperanceOnTheList(String keyword) {
        oInstaPage.findWebSitePosition(keyword);
    }
}
