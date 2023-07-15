# Getting Started
Install packages. In the project directory run:

`yarn install`

# Run tests
To open GUI test runner:

`node_modules\.bin\cypress open`

To run tests in CLI:

`node_modules\.bin\cypress run -b chrome`

It will run all tests in Chrome browser, test results will be in `results` directory,
if test fails screenshots will be in `cypress\screenshots` directory.

# Comments
In real project I would use Gherkin syntax, in this case I would use cypress-cucumber-preprocessor library.
