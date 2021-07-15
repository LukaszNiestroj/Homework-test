Feature('PracticeForm');

Scenario('PracticeForm_ComplementForm', ({ I }) => {
    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.fillField("//input[@id='firstName']", "Łukasz");
    I.fillField("//input[@id='lastName']", "Niestrój");
    I.fillField("//input[@id='userEmail']", "lukas.nnn@gmail.com");
    I.click('Male');
    I.fillField("//input[@id='userNumber']", "111111111");
    I.fillField("//input[@id='dateOfBirthInput']", "12 May 1994");
    I.fillField("//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']", "QE Tester");
    I.click('Sport');
    I.fillField("//textarea[@id='currentAddress']", "ul. Powstańców Śląskich");
    I.fillField("//div[contains(text(),'Select State')]", "NCR");
    I.selectOption("//div[contains(text(),'Select City')]", "Delhi");
    I.click("//button[@id='submit']");


});
