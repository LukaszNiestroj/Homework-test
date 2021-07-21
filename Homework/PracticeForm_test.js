Feature('PracticeForm');

Scenario('PracticeForm_ComplementForm', ({ I }) => {
    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.fillField("//input[@id='firstName']", "Łukasz");
    I.wait(1)
    I.fillField("//input[@id='lastName']", "Niestrój");
    I.wait(1)
    I.fillField("//input[@id='userEmail']", "lukas.nnn@gmail.com");
    I.wait(1)
    I.click('Male');
    I.wait(1)
    I.fillField("//input[@id='userNumber']", "111111111");
    I.wait(1)
    I.click("//input[@id='dateOfBirthInput']");
    I.wait(1)
    I.click("//select[@class='react-datepicker__year-select']");
    I.wait(1)
    I.selectOption("//select[@class='react-datepicker__year-select']", '1994');
    I.wait(1)
    I.selectOption("//select[@class='react-datepicker__month-select']", "May");
    I.wait(1)
    I.click("//div[@class='react-datepicker__day react-datepicker__day--012']");
    I.wait(1)
    I.fillField("//input[@id='subjectsInput']", "physics");
    I.click("//div[contains(@class,'option') and contains(text(),'Physics')]");
    I.wait(1)
    I.click('Sport');
    I.fillField("//textarea[@id='currentAddress']", "ul. Powstańców Śląskich");
    I.wait(1)
    I.click("//div[contains(text(),'Select State')]");
    I.wait(1)
    I.click("//div[contains(@class,'option') and contains(text(),'NCR')]");
    I.wait(1)
    I.click("//div[contains(text(),'Select City')]");
    I.wait(1)
    I.click("//div[contains(@class,'option') and contains(text(),'Delhi')]");
    I.wait(1)
    I.click("//button[@id='submit']");


});
