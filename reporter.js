const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Mac OS",
        "Executed": "Local"
    }
};


reporter.generate(options)