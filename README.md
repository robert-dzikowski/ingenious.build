# Getting Started
Install packages. In the project directory run:

`yarn install`

# Run tests
To open GUI test runner:

`node_modules\.bin\cypress open`

To run tests in CLI:

`node_modules\.bin\cypress run -b chrome`

It will run all tests in Chrome browser, test results will be saved to `results` directory,
if test fails screenshots will be saved to `cypress\screenshots` directory.

# Comments
In real project I would use PageObject pattern where it is possible.
