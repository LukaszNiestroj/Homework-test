Feature('PracticeForm');

Scenario('PracticeForm_ComplementForm', ({ I }) => {
    I.amOnPage('https://demoqa.com/automation-practice-form');
    I.fillField("//input[@id='firstName']", "Łukasz");
    I.fillField("//input[@id='lastName']", "Niestrój");
    I.fillField("//input[@id='userEmail']", "lukas.nnn@gmail.com");
    I.click('Male');
    I.fillField("//input[@id='userNumber']", "111111111");
    I.click("//input[@id='dateOfBirthInput']");
    I.click("//select[@class='react-datepicker__year-select']");
    I.selectOption("//select[@class='react-datepicker__year-select']", '1994');
    I.selectOption("//select[@class='react-datepicker__month-select']", "May");
    I.click("//div[@class='react-datepicker__day react-datepicker__day--012']");
    I.fillField("//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']", 'Physics');
    I.click('Sport');
    I.fillField("//textarea[@id='currentAddress']", "ul. Powstańców Śląskich");
    I.click("//div[contains(text(),'Select State')]");
    I.click("//div[@class='mt-4 justify-content-end row']", "NCR");
    I.click("//div[contains(text(),'Select City')]", "Delhi");
    I.click("//button[@id='submit']");


});
