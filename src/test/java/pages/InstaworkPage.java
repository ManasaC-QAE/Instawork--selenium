package pages;

import constants.InstaworkConstants;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class InstaworkPage {

    WebDriver driver = new ChromeDriver();
    WebDriverWait wait;
    InstaworkConstants oConstants = new InstaworkConstants();

    public WebElement getSearchBox() {
        return driver.findElement(By.xpath("//input[@type='text']"));
    }

    public List<WebElement> getSearchResultList() {
        return driver.findElements(By.xpath("//*[@class=\"rc\"]/div/a"));
    }

    public WebElement getInstworkWebsiteLink() {
        return driver.findElement(By.xpath("(//a[@href=\"https://www.instawork.com/\"])[1]"));
    }

    public WebElement getNextPageButton() {
        return driver.findElement(By.xpath("//td/a/span[text()=\"Next\"]"));
    }

    public void goToGoogle() {
        driver.get("https://www.google.com");
    }

    public String getCurrentWebsiteURL() {
        return driver.getCurrentUrl();
    }

    public void SearchInstawork(String keyword) {
        getSearchBox().click();
        getSearchBox().sendKeys(keyword);

        // Click enter
        getSearchBox().sendKeys(Keys.ENTER);
    }

    public void getFirstResult() {
        getSearchResultList().get(0).getAttribute("href");
    }

    public void launchInstaworkWebsite() {
        getInstworkWebsiteLink().click();
    }

    public void findWebSitePosition(String keyword) {
        for (int i = 0; i < getSearchResultList().size() - 1; i++) {
            String link = getSearchResultList().get(i).getAttribute("href");
            if (link.contains(oConstants.instaworkLink)) {
                int pos = i+ 1;
                System.out.println("Website Found at position ===== " + pos);
                break;
            }
        }
    }
}