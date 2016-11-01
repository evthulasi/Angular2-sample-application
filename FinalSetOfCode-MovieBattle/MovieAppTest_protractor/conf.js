exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['SampleTests.js'],
  rootElement: '#example',
  // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
	onPrepare: function() {

        var Jasmine2HtmlReporter = require('./index.js');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
        }));

    },
	useAllAngular2AppRoots: true
};