**Setup and Installation**

1. Create a folder AutomationProject
2. Open this folder in vs code
3. open terminal in vs code
4. Take node package by using npm init
5. Then input prject information step by setp
package name: (automationproject)
version: (1.0.0)                                                                                                                                                                                                               
description: Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07
entry point: (index.js)                                                                                                                                                                                                        
test command:                                                                                                                                                                                                                  
git repository:                                                                                                                                                                                                                
keywords: WDIO, POM, Chromedriver, Xpath, Allur Report
author: Mim Akter                                                                                                                                                                                                              
license: (ISC)
About to write to D:\AutomationProject_Elias\package.json:
{
  "name": "automationproject",
  "version": "1.0.0",
  "description": "Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "WDIO",
    "POM",
    "Chromedriver",
    "Xpath",
    "Allur",
    "Report"
  ],
  "author": "Mim Akter",
  "license": "ISC"
}

Is this OK? (yes) yes
PS D:\AutomationProject>

6. After completeing this step package.json file saved in directory folder
and we can see this information
{
  "name": "automationproject",
  "version": "1.0.0",
  "description": "Automation test projcet for Ostad Manual and Automation Test Course SQA: Batch:07",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "WDIO",
    "POM",
    "Chromedriver",
    "Xpath",
    "Allur",
    "Report"
  ],
  "author": "Mim Akter",
  "license": "ISC"
}

7. => Go to this link: https://webdriver.io/docs/gettingstarted/
for wdio documentation

Copy and run this code in code for package installation.
npm i --save-dev @wdio/cli

After install wdio, package.json file add this dependency code
"devDependencies": {
    "@wdio/cli": "^9.1.3"
  }

And node_modules and package-lock.json file will create in your project folder.  
8. Now use and run this code in terminal
npm init wdio@latest

If face any error remove node_module and package-json file then re-install npm i and npm init wdio.
9. choose this 
✔ A project named "automationproject" was detected at "D:\AutomationProject", correct? yes
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Web - web applications in the browser
✔ With which  browser should we start?
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? no
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? D:\AutomationProject\test\specs\**\*.js
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? yes
✔ Where are your page objects located? D:\AutomationProject\test\pageobjects\**\*.js
✔ Which reporter do you want to use?
✔ Do you want to add a plugin to your test setup?
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! yes
? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◯ visual
 ◯ vite
 ◯ nuxt
 ◯ firefox-profile
 ◯ gmail
 ◯ sauce
 ◯ testingbot

9. after installation completion some file create in folder test, specs etc, use this code for run demo project
npx wdio run ./wdio.conf.js
Note: In Page object model  locators and actions are stored separtely as stractured way for mantainability and reusability.

10. I keept all suites in 3 js file according to user in specs folder. In pages folder I kept different locators and actions file in different folder.
11. I used website link in baseUrl of wdio.conf.js
          baseUrl: ' https://www.saucedemo.com/'
12. After running prjoect, before execution my sutits I use this code in wdio.conf.js file for maximixzing window.
     beforeSuite: async function (suite) {
        await browser.maximizeWindow();
        await browser.url(this.baseUrl);
    },
13. I used this code in for close window after comlete execution all suits
     afterSuite: async function (suite) {
        await browser.quit();
    },
14. I used this code to import essential file wdio.conf.js file to run suits separatly and/or  altogether   
    const locked_out_user = "./test/specs/lockedOutUser.spec.js"
    const standard_user = "./test/specs/standard_user.spec.js"
     const performance_glitch_user = "./test/specs/performance_glitch_user.spec.js"
15. specs: [
        locked_out_user
    ], This spcecs used for separately   
16. suites: {
        allUser: [[locked_out_user], [standard_user], [performance_glitch_user]],
    }, Suites used for altogether   

 7. In utility.js file of Utilities folder I used some dynamic function for useing multiple file and multiple time such as 
    convertTextToNumberForSubTotal,randomNumber,createRandomString etc.  
18. I used describe() and it()  function for scripting my suit and case.  
19. I used this code for waiting very next  suti execution 
        await browser.pause(5000);
20. I use toEqual method for verify different functionality as my expted and actual result
    ex: expect(expectedItemTotal).toEqual(actualItemTotal);
    21. I use .gitignore file for avoiding push file in github.

===================================*************************=================================
**Allur Report Add**
1. Open this site https://webdriver.io/docs/allure-reporter/
2. copy this code npm install @wdio/allure-reporter --save-dev and use it in terminal then install allure report in project.
After successfully install we can see this in package.json file "@wdio/allure-reporter": "^9.2.2",

3. Copy this code reporters: [['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true, disableWebdriverScreenshotsReporting: true, }]],

and use this code in wdio.conf.js file and some line should commend primarily reporters: [['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: false //disableWebdriverScreenshotsReporting: true, }]],

4. Now we check trial basis, run project npm run test After running project allure-results folder is automatically create in project directory folder. and some file will create as per runnig project.
5. Now copy this line and use it terminal then run. npm i allure-commandline

after install this code saved in package.json file "dependencies": { "allure-commandline": "^2.31.0" }

6. Use this code in package.json file in scripts; "getReport": "allure generate allure-results --clean && allure open"

after run project , use this code for seeing allurreport
npm run getReport

7. To take screenshot uncomment this line in reporters of wdio.conf.js
//disableWebdriverScreenshotsReporting: true, }]],

Total reporrter function is
  reporters: [['allure', { 
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
     }]],


8. Now use this code in wdio.conf.js file 

 afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      const screenshot = await browser.takeScreenshot();
      allure.addAttachment(
        "Screenshot",
        Buffer.from(screenshot, "base64"),
        "failure/png"
      );
      }
},

9. After running your project allur-result folder created in project.
10. After runnig report by using  any error found allurrepoort take screenshot and displaying.
==========================================*******************=====================================================================================
**Project run**
I use this code in package.json file for run project smoothly
     "scripts": {
    "test": "wdio run ./wdio.conf.js",
    "allUser": "wdio run ./wdio.conf.js --suite allUser",
    "getReport": "allure generate allure-results --clean && allure open"
  },
1. If you want to run file separately use 
    npm run test
    you should mention in spec which file you want to open
        for locked user 
             specs: [
        locked_out_user
        ],
If you want to run another user file change locked_out_user to other.
2. If you want to run all file togetherness at a time use :
        npm run allUser
        after run project, you can see all 3 file run 3 different browser at a time  
              
     After running your project allur-result folder created in project. If any error found , terminal shows error path by spce
3. If you want to run allur report use this code in terminal
   npm run getReport
    After runnig report  allurrepoort take screenshot if any error have in project and displaying details information,
=================================================**************************==============================================================================
**Github journey**
   1. Firstly created a repository in my github account  name = FinalAutomationProject
   2. now use this code in terminal of my project for git initialization and push project in github
        git init 
        git commit -m "Firs commit for my final automation project"
        git push -u origin main
        git remote add origin https://github.com/elias-idb/FinalAutomationProject.git
        git push -u origin main
   3. If you want to clone my projcet copy my repository link
   4. after opening terminal use this code
   
      git clone https://github.com/elias-idb/FinalAutomationProject.git
5. since I don't upload allure-report, allur-result, node-nodules and package-lock.json
      you shold reinstall it by using this code in terminal as per package.json information
          npm i
          after using this code all essential file will install and save   

   6. Then run my project. 
        npm run test  => for separte run
        npm run allUser => for togetherness run
        npm run getReport => for report
**Acknowledge**
   Our instructor Hriody Das bhiya was really impressive. Without his impressive guideline we couldn't complete this journey. Total ostad team including Ria apu also help 
   us to their best support for this journey.


   
