// karma.conf.js
// local test file, uses JS within the ui.apps/src/main/content/jcr_root/etc/ path
module.exports = function(config) {
  config.set({
      frameworks: ['jasmine-ajax','jasmine-jquery','jasmine'],
      singleRun: false,
      colors:    true,
      autoWatch: true,
      logLevel: config.LOG_DEBUG,
      reporters: ['spec','progress', 'junit','coverage'],
      client: {
          useIframe: false
      },
      browsers: ['Chrome'],
      files: [
        'node_modules/phantomjs-polyfill/bind-polyfill.js',
        'dist/vendor.min.js',
        'js/tests/*.js',
        'dist/unit-testing.min.js'
      ],
      plugins: [
        'karma-coverage',
        'karma-jasmine',
        'karma-jasmine-jquery',
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-spec-reporter',
        'karma-jasmine-ajax',
        'karma-phantomjs-launcher'
      ],
      coverageReporter: {
        type:   'lcov',
        dir:    'reports',
        subdir: 'coverage',
        check: {
          global: {
            statements: 8,
            branches: 8,
            functions:8,
            lines: 8
          }
        }
      },
      junitReporter: {
        outputDir: 'reports/junit',
        outputFile: 'jasmine-unit-tests.xml',
        suite: 'UnitTesting',
        useBrowserName: false,
        nameFormatter: undefined,
        classNameFormatter: undefined
      }
  });
};