const {Builder, By, Key, Capabilities, Select, until} = require('selenium-webdriver');

(async function example() {
// Open Chrome Browser
// const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();

// Open tennis center login
await driver.get('https://center.tennis.org.il/self_services/login');

// Input credentials
await driver.findElement(By.name('login')).sendKeys('shardel23@gmail.com');
await driver.findElement(By.name('p_id')).sendKeys('308452721');
await driver.findElement(By.id('submit-btn')).click();
await driver.manage().setTimeouts( { implicit: 1000 } );

// const res = await driver.findElement(By.css('button[class="close"]'));
// console.log(res);

// Input date and time
await driver.findElement(By.id('search_start_date')).sendKeys('07/12/2021');
await driver.findElement(By.css('option[value="21:00"]')).click();
await driver.findElement(By.id('step1-submit-btn')).click();
await driver.manage().setTimeouts( { implicit: 3000 } );

// Check court availability
try {
    await driver.findElement(By.css('div[class="alert alert-danger"]'));
    console.log("No Courts Available")
}
catch (err) {
    console.log("Found a Court")
    // await driver.findElement(By.css('a[class="btn btn-md btn-primary btn-choose"]')).click();
}

// Close
await driver.quit();
})()
