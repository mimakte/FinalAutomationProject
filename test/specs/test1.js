const loginActions = require("../pages/login/loginActions");

const Username = "locked_out_user";
const Password = "secret_sauce";

describe("Automation for Swag Labs", () => {
  it("Should able to successfully login", async () => {
    await loginActions.inputUsername(Username);
    await loginActions.inputPassword(Password);
    await loginActions.clickOnSubmitButton();
    await browser.pause(1000);
    const el = await loginActions.getErrorElement();
    await expect(el).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
