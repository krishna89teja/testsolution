test-automation-end-to-end-script

Requirements
In order to utilise this project you need to have the following installed locally:

Chrome Browser latest version
Java 8
Node.js 14 version
Set environment variables for Node.js

Once we have above installables ready, to run the cases first we need to install node packages.
Navigate to automationtest folder and run below command on cmd:-

npm install   
npx wdio wdio.conf.js

The above command installs all the node modules that are available in package.json and runs the script that is provided in wdio.conf.js.


Reporting
Used webdriverio-time-line reporter to log the actions and verifications which would be found under reports folder once the above execution is done.

Framework:
Used Page object model approach
wdio.conf.js consists of all the configurations that required to run the scripts. 
automation_test_e2e.js consists of all the scenarios written in jasmine.
Used jasmine BDD framework to create test scripts.
util.js consists of all actions and verifications that needs to be performed.
